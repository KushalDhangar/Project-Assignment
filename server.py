from flask import Flask, jsonify
import json
import os

app = Flask(__name__)

@app.route('/')
def get_data():
    try:
        with open('scraped_data.json', 'r') as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({'error': 'scraped_data.json not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

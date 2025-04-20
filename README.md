DevOps Assignment – Web Scraper and Flask Server using Docker
📌 Project Overview
This project demonstrates the use of Node.js with Puppeteer to scrape data from any user-provided website URL and a Python Flask server to serve the scraped data as a JSON API — all containerized using a multi-stage Docker setup.

🔧 Technologies Used
Node.js

Puppeteer

Chromium

Python 3.10

Flask

Docker (multi-stage builds)

📁 Project Structure
scrape.js: Node.js script to scrape a webpage title and heading

server.py: Python Flask app to host the scraped data

entrypoint.sh: Runs scraper and then starts the Flask server

Dockerfile: Multi-stage Docker configuration

package.json: Node dependencies

requirements.txt: Python dependencies

README.md: Documentation

🚀 How to Build the Docker Image
bash
Copy
Edit
docker build -t projectassignment .
▶️ How to Run the Container with Custom URL
bash
Copy
Edit
docker run -p 5000:5000 -e SCRAPE_URL=https://example.com projectassignment
To avoid port conflict:

bash
Copy
Edit
docker run -p 5001:5000 -e SCRAPE_URL=https://wikipedia.org projectassignment
🌐 Access the Scraped Output
Open your browser and visit:

arduino
Copy
Edit
http://localhost:5000
If you used port 5001:

arduino
Copy
Edit
http://localhost:5001
📋 Sample Output
json
Copy
Edit
{
  "title": "Wikipedia",
  "heading": "Welcome to Wikipedia"
}
🐞 Troubleshooting
"scraped_data.json not found" → The scraper failed. Check the Docker logs.

port already allocated → Use a different port, like 5001:5000.

SCRAPE_URL not changing → Rebuild the Docker image and verify you're passing the env variable correctly.

✅ Deliverables
Dockerfile

scrape.js

server.py

entrypoint.sh

requirements.txt

package.json

README.md 

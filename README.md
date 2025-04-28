SCID Gombe Complaint Portal

A web-based complaint management system for the Nigeria Police Force — State Criminal Investigation Department (SCID) Gombe.
This platform allows citizens to lodge complaints easily, securely, and track submissions.
Features

    Beautiful Homepage with SCID Gombe branding and Nigerian Police logo

    Secure Complaint Form with fields for Name, Contact Info, Category, Description, and File Upload

    Submissions Page for administrators to view lodged complaints

    Express.js Backend handling form submissions and file uploads

    Modern, mobile-friendly UI

Technologies Used

    Frontend: HTML5, CSS3, JavaScript

    Backend: Node.js, Express.js

    Version Control: Git, GitHub

    File Uploads: Multer (Node.js middleware)

    Server: Localhost (localhost:3000) or remote hosting

Setup Instructions
1. Clone the Repository

git clone https://github.com/rasheethkar/myproject.git
cd myproject

2. Install Dependencies

npm install

3. Run the Server

node server.js

Server will start on:

http://localhost:3000

4. Open in Browser

    Homepage: http://localhost:3000/index.html

    Lodge Complaint: http://localhost:3000/complaint.html

    View Submissions: http://localhost:3000/submissions.html

Project Folder Structure

/ (root)
├── public/
│   ├── images/
│   │   ├── npf2.png
│   │   ├── npf_scid_gombe_logo.png
│   ├── index.html
│   ├── complaint.html
│   └── submissions.html
├── uploads/        # Uploaded files are stored here
├── server.js       # Express server handling form submissions
├── package.json
└── README.md

Screenshots

(You can insert screenshots later here, e.g., homepage, complaint form, submissions view.)
Future Improvements

    Add email notifications after complaint submission

    Add admin login system for secure access to submissions

    Host live online (e.g., Render, Railway, or Vercel)

    Implement database storage (MongoDB or SQL)

License

This project is intended for official use by the Nigeria Police Force — SCID Gombe.
All rights reserved.

# 🔗 URL Shortener

A simple Node.js-based URL shortener that allows users to generate short links, track click analytics, and redirect to original URLs. Built using Express.js, MongoDB, and Mongoose.

---

## Features

-  Shorten long URLs into simple short IDs
-  Redirect to original URLs using the short ID
-  Track and view analytics (timestamp of each visit)
-  Built with Node.js, Express, MongoDB, and Mongoose

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **ID Generation**: shortid
- **API Testing**: Postman

---

## Folder Structure
URL-SHORTENER/
│
├── controllers/
│ └── url.js # Core logic for creating, redirecting and analytics
│
├── models/
│ └── url.js # Mongoose schema and model
│
├── routes/
│ └── url.js # Route definitions
│
├── connection.js # MongoDB connection utility
├── index.js # Entry point of the server
├── package.json
└── README.md # You're here


---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
2. Install dependencies (npm install)
3. Start server (node index.js)


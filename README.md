# 🌐 URL Shortener

A secure and reliable full-stack web application to shorten long URLs and manage them with user authentication and session-based access.

## 🚀 Features

- 🔗 Shorten any valid URL
- 🔐 User authentication with sessions (Login/Register/Logout)
- 👤 Authenticated dashboard to manage your short URLs
- 📊 Track the number of clicks on each URL
- 🧠 Middleware-based custom authentication system
- 🖥️ Simple, clean UI with EJS templates and CSS

---

## 🛠️ Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| **Frontend** | HTML, CSS, EJS       |
| **Backend**  | Node.js, Express.js  |
| **Database** | MongoDB, Mongoose    |
| **Auth**     | Sessions + Middleware|

---



## Folder Structure
project-root/
│
├── models/ # Mongoose schemas (User, URL)
|── controllers/ # functions of routes
├── routes/ # Express routes (auth, urls, etc.)
├── views/ # EJS templates (home, login, dashboard, about)
├── public/css/ # Static CSS styling
├── middleware/ # Custom authentication middleware
├── connection.js
├── /service # hashmap to get and set id
├── index.js # Main server file
└── README.md # Project documentation


---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
2. Install dependencies (npm install)
3. Start server (node index.js)


---

## 🔐 Authentication

This app uses custom session-based authentication:

- Passwords are securely hashed using `bcrypt`.
- Sessions are managed using `express-session` with a MongoDB store.
- Custom middleware protects routes (e.g., dashboard, URL management).

---

## ⚙️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener


Install dependencies

npm install

npm start


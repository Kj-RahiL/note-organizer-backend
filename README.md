# 📝 Note Organizer API - Backend Documentation

![Fullstack MERN](https://img.shields.io/badge/Fullstack-MERN-green?logo=react&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A **RESTful API** for a note organizer application with authentication, notes CRUD, categories, and image uploads.

---

## 📑 Table of Contents

- [API Overview](#api-overview)
- [Tech Stack](#tech-stack)
- [Environment Variables](#environment-variables)
- [Database Models](#database-models)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Notes](#notes)
  - [Categories](#categories)
- [Postman Documentation](#postman-documentation)
- [Setup Guide](#setup-guide)
- [Deployment](#deployment)
- [License](#license)
- [Contributing](#contributing)

---

## 🌐 API Overview

A **note organizer backend API** with:

- User authentication (JWT)
- CRUD operations for notes
- Category management (color-coded)
- Image uploads (Cloudinary)
- Advanced filtering & pagination

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Prisma ORM)
- **Authentication:** JWT
- **Validation:** Zod
- **Testing:** Jest _(Bonus)_

---

## 🗄 Database Models

Key Models:

- **Users:** Authentication & profile management
- **Notes:** Core content with priorities/pinning
- **Categories:** Color-coded organization
- **Images:** File attachments

[View Full Prisma Schema](./prisma/schema.prisma)

---

## 🔌 API Endpoints

### 🛂 Authentication

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| POST   | `/api/auth/register` | User registration  |
| POST   | `/api/auth/login`    | User login         |

---

### 📝 Notes

| Method | Endpoint         | Description                    |
| ------ | ---------------- | ------------------------------ |
| GET    | `/api/notes`     | Get paginated notes (filterable) |
| POST   | `/api/notes`     | Create new note               |
| PUT    | `/api/notes/:id` | Update note                   |
| DELETE | `/api/notes/:id` | Archive note (soft delete)    |

---

### 🗂 Categories

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| GET    | `/api/categories`      | Get user's categories  |
| POST   | `/api/categories`      | Create new category    |
| PATCH  | `/api/categories/:id`  | Update category color  |

---


## 📚 Postman Documentation

[![Postman Collection](https://run.pstmn.io/button.svg)](https://www.postman.com/collections/your-collection-link)

Full API documentation with example requests:

- [View Postman Collection](https://www.postman.com/collections/your-collection-link)
- [Download Collection JSON](./postman/collection.json)

---

## 🖥 Local Development Setup

 **Clone repository**

   ```bash
   git clone https://github.com/yourusername/note-organizer.git
   cd backend
   npm install
   npx prisma generate
   npx prisma db push
   ```

## 🚀 Deployment
https://render.com/images/deploy-to-render-button.svg


## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🐛 Report Issues

Please use [GitHub Issues](https://github.com/yourusername/note-organizer/issues) to report bugs or request features.

---

## ✨ Contribute

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

> **Documentation generated from Prisma schema v1.0**  
> Last updated: `${new Date().toISOString()}`




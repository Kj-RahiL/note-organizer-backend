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

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| POST   | `/api/v1/auth/register` | User registration  |
| POST   | `/api/v1/auth/login`    | User login         |

---

### 📝 Notes

| Method | Endpoint            | Description                   |
| ------ | ------------------- | ------------------------------|
| GET    | `/api/v1/notes`     | Get paginated note(filterable)|
| POST   | `/api/v1/notes`     | Create new note               |
| PUT    | `/api/v1/notes/:id` | Update note                   |
| DELETE | `/api/v1/notes/:id` | Archive note (soft delete)    |

---

### 🗂 Categories

| Method | Endpoint                  | Description            |
| ------ | ------------------------- | ---------------------- |
| GET    | `/api/v1/categories`      | Get user's categories  |
| POST   | `/api/v1/categories`      | Create new category    |
| PATCH  | `/api/v1/categories/:id`  | Update category color  |

---


## 📚 Postman Documentation

[![Postman Collection](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/35080720/2sB34hHgQe)

Full API documentation with example requests:

- [View Postman Collection](https://documenter.getpostman.com/view/35080720/2sB34hHgQe)
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
**Backend:** https://note-organizer-backend-two.vercel.app

**Frontend:** https://note-organizer-frontend-mu.vercel.app


## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🐛 Report Issues

Please use [GitHub Issues](https://github.com/kj-rahil/note-organizer/issues) to report bugs or request features.

---

## ✨ Contribute

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

> **Documentation generated from Prisma schema v6.11.1**  
> Last updated: `10-07-25`




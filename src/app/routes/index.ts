import express from "express";

import { AuthRoutes } from "../modules/Auth/auth.routes";
import { UserRoutes } from "../modules/User/user.route";
import { categoryRoutes } from "../modules/Category/Category.route";
import { noteRoutes } from "../modules/Note/Note.route";
import { imageRoutes } from "../modules/Image/Image.route";


// import { paymentRoutes } from "../modules/Payment/payment.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },

  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/categories",
    route: categoryRoutes,
  },
  {
    path: "/notes",
    route: noteRoutes,
  },
  {
    path: "/image",
    route: imageRoutes,
  },
  
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

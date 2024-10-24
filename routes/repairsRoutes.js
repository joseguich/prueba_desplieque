import express from "express";
import { homeRepairs } from "../controllers/homeRepairsControllers.js";
import authRoutes from "../middleware/authRoutes.js";

const router = express();

router.get("/home-repairs", authRoutes, homeRepairs);

export default router;

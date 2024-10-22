import express from "express";
import { homeRepairs } from "../controllers/homeRepairsControllers.js";

const router = express();

router.get("/home-repairs", homeRepairs);

export default router;

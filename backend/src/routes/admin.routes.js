import { Router } from "express";

import { getAdminDashboard } from "../controllers/admin.controllers.js";

const adminRoute = Router();

adminRoute.get("/dashboard", getAdminDashboard);

export default adminRoute;

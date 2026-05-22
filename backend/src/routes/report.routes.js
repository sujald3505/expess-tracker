// import { Router } from "express";
// import { route } from "./main.route.js";
// import { getSummaryReport } from "../controllers/report.controller.js";

// const reportRoute = Router();

// reportRoute.get("/summary",getSummaryReport)

// export default reportRoute;

//
import { Router } from "express";

import {
  getUserAnalytics,
  getSummaryReport,
} from "../controllers/report.controller.js";

import { authenticate } from "../middleware/authenticate.js";

const reportRoute = Router();

reportRoute.get("/analytics", authenticate, getUserAnalytics);

reportRoute.get("/summary", authenticate, getSummaryReport);

export default reportRoute;

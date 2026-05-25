// // // // import { Router } from "express";

// // // // import {
// // // //   getUserAnalytics,
// // // //   getSummaryReport,
// // // // } from "../controllers/report.controller.js";

// // // // import { authenticate } from "../middleware/authenticate.js";

// // // // const reportRoute = Router();

// // // // reportRoute.get("/analytics", authenticate, getUserAnalytics);

// // // // reportRoute.get("/summary", authenticate, getSummaryReport);

// // // // export default reportRoute;

// // // import { Router } from "express";

// // // import {
// // //   getUserAnalytics,
// // //   getSummaryReport,
// // //   getCategoryAnalytics,
// // // } from "../controllers/report.controller.js";

// // // import { authenticate } from "../middleware/authenticate.js";

// // // const reportRoute = Router();

// // // // ADMIN ANALYTICS
// // // reportRoute.get("/analytics", authenticate, getUserAnalytics);

// // // // SUMMARY
// // // reportRoute.get("/summary", authenticate, getSummaryReport);

// // // // CATEGORY ANALYTICS
// // // reportRoute.get("/category-analytics", authenticate, getCategoryAnalytics);

// // // export default reportRoute;

// // import { Router } from "express";

// // import {
// //   getUserAnalytics,
// //   getSummaryReport,
// //   getMonthlyReport,
// // } from "../controllers/report.controller.js";

// // import { authenticate } from "../middleware/authenticate.js";

// // const reportRoute = Router();

// // reportRoute.get("/analytics", authenticate, getUserAnalytics);

// // reportRoute.get("/summary", authenticate, getSummaryReport);

// // reportRoute.get("/monthly", authenticate, getMonthlyReport);

// // export default reportRoute;

// // import { Router } from "express";

// // import {
// //   getUserAnalytics,
// //   getSummaryReport,
// //   getCategoryAnalytics,
// //   getMonthlyReport,
// // } from "../controllers/report.controller.js";

// // import { authenticate } from "../middleware/authenticate.js";

// // const reportRoute = Router();

// // // SUMMARY
// // reportRoute.get("/summary", authenticate, getSummaryReport);

// // // ADMIN ANALYTICS
// // reportRoute.get("/analytics", authenticate, getUserAnalytics);

// // // CATEGORY ANALYTICS
// // reportRoute.get("/category", authenticate, getCategoryAnalytics);

// // // MONTHLY REPORT
// // reportRoute.get("/monthly", authenticate, getMonthlyReport);

// // export default reportRoute;


// import { Router } from "express";

// import {
//   getSummaryReport,
//   getUserAnalytics,
//   getCategoryAnalytics,
//   getMonthlyReport,
// } from "../controllers/report.controller.js";

// import { authenticate } from "../middleware/authenticate.js";

// const reportRoute = Router();

// // SUMMARY REPORT
// reportRoute.get(
//   "/summary",
//   authenticate,
//   getSummaryReport
// );

// // ADMIN ANALYTICS
// reportRoute.get(
//   "/analytics",
//   authenticate,
//   getUserAnalytics
// );

// // CATEGORY REPORT
// reportRoute.get(
//   "/category",
//   authenticate,
//   getCategoryAnalytics
// );

// // MONTHLY REPORT
// reportRoute.get(
//   "/monthly",
//   authenticate,
//   getMonthlyReport
// );

// export default reportRoute;

import { Router } from "express";

import {
  getSummaryReport,
  getUserAnalytics,
 
 
} from "../controllers/report.controller.js";

import { authenticate } from "../middleware/authenticate.js";

const reportRoutes = Router();

// SUMMARY
reportRoutes.get(
  "/summary",
  authenticate,
  getSummaryReport
);

// ADMIN ANALYTICS
reportRoutes.get(
  "/analytics",
  authenticate,
  getUserAnalytics
);



export default reportRoutes;
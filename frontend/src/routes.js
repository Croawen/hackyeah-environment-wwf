export const loginPath = "/login";

export default [
  {
    path: "/",
    exact: true,
    name: "dashboard",
    loader: () => import("./views/IndexPage")
  },
  {
    path: "/report/:type",
    exact: true,
    name: "report-page",
    loader: () => import("./views/ReportPage")
  }
];

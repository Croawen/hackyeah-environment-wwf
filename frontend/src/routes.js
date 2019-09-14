export const loginPath = "/login";

export default [
  {
    path: "/",
    exact: true,
    name: "dashboard",
    loader: () => import("./views/IndexPage")
  }
];

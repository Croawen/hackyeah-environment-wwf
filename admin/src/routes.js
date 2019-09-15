//TODO make customFetch use this
export const loginPath = "/login";

export default [
  {
    protected: false,
    path: loginPath,
    exact: true,
    name: "login-page",
    loader: () => import("./screens/Login/LoginPage")
  },
  {
    protected: true,
    path: "/locations",
    exact: true,
    name: "locations-page",
    loader: () => import("./screens/Locations/LocationsPage")
  },
  {
    protected: true,
    path: "/locations/:locationId",
    exact: true,
    name: "location-page",
    loader: () => import("./screens/Location/LocationPage")
  }
];

import DashboardPage from "./screens/Dashboard/DashboardPage";
import LocationPage from "./screens/Location/LocationPage";
import LocationsPage from "./screens/Locations/LocationsPage";

export const routes = [
  {
    path: ["/", "/dashboard"],
    exact: true,
    component: DashboardPage
  },
  {
    path: "/locations",
    exact: true,
    component: LocationsPage
  },
  {
    path: "/locations/:locationId",
    exact: true,
    component: LocationPage
  }
];

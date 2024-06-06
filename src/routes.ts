import Accordion from "./components/Accordion";
import HomePage from "./HomePage";

const appRoutes = [
  { path: "/", element: HomePage },
  {
    path: "/accordion",
    element: Accordion,
  },
];

export default appRoutes;

import Accordion from "./components/Accordion";
import HomePage from "./pages/HomePage";
import Splitwise from "./pages/Splitwise";

const appRoutes = [
  { path: "/", element: HomePage },
  {
    path: "/accordion",
    element: Accordion,
  },
  {
    path: "/splitwise",
    element: Splitwise,
  },
];

export default appRoutes;

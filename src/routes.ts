import Accordion from "./components/Accordion";
import HomePage from "./pages/HomePage";
import SortingVisualizer from "./pages/SortingVisualizer";
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
  { path: "/sorting-visualizer", element: SortingVisualizer },
];

export default appRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import appRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {appRoutes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

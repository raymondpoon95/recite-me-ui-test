import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Crew from "./pages/crew/Crew";
import Rocket from "./pages/rocket/Rocket";
import RocketDetails from "./pages/rocket/RocketDetails";
import CrewDetails from "./pages/crew/CrewDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/:id" element={<CrewDetails />} />
        <Route path="/rocket" element={<Rocket />} />
        <Route path="/rocket/:id" element={<RocketDetails />} />
      </Routes>
    </>
  );
}

export default App;

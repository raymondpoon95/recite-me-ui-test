import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Crew from "./pages/crew/Crew";
import Rocket from "./pages/rocket/Rocket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />}>
          <Route path="/crew:id" element={<Crew />} />
        </Route>
        <Route path="/rocket" element={<Rocket />}>
          <Route path="/rocket:id" element={<Rocket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

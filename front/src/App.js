import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [sideBar, showSideBar] = useState(false);
  const toggleSideBar = () => {
    showSideBar((s) => !s);
  };
  return (
    <div className="font-Roboto">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home toggleSideBar={toggleSideBar} sideBar={sideBar} />}
        />
      </Routes>
    </div>
  );
}

export default App;

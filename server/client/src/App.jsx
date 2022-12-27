import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import UploadMovie from "./components/movieComponent/UploadMovie";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route
          path="/login"
          element={<Login theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/register"
          element={<Register theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/uploadMovie"
          element={<UploadMovie theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </>
  );
}

export default App;

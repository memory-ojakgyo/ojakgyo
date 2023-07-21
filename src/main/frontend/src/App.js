import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Home from "./routes/Home";
import MainScreen from "./routes/MainScreen";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<MainScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, SignupLogin, Cart } from "./pages";
import { Layout } from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/Signup-Login" element={<SignupLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

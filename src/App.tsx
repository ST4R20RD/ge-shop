import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, Product, ReviewPlaceOrder, SignupLogin } from "./pages";
import { Layout } from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

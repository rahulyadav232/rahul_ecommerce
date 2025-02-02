import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar  onSearch={setSearchQuery}/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:name" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;

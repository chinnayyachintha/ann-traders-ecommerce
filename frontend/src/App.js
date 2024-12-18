import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductCatalogPage from "./pages/ProductCatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products" element={<ProductCatalogPage />} />
                <Route path="/products/:productId" element={<ProductDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;

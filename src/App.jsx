import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import CategoryPage from "./components/pages/CategoryPage";
import ProductDetailPage from "./components/pages/ProductDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/category/:categoryName"
            element={<CategoryPage />}
          />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetailPage />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

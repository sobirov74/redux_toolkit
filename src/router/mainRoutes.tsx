import MainPage from "pages/mainPage";
import Product from "pages/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:alias" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

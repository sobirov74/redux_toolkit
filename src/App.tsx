import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product/[id]";
import MainPage from "./pages/mainPage";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

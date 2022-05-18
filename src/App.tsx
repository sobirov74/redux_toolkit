import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product/[id]";
import MainPage from "./pages/mainPage";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:alias" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

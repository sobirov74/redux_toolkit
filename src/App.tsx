import Catalogue from "./Components/Catalogue/Catalogue";
import Header from "./Components/Header/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Catalogue />
      </div>
    </Provider>
  );
};

export default App;

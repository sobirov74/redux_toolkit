import { Provider } from "react-redux";
import store from "redux/store";
import { mainRoutes } from "router/mainRoutes";
import Header from "components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      {mainRoutes()}
    </Provider>
  );
};

export default App;

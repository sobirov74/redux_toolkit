import { Provider } from "react-redux";
// import store from "redux/store";
import { MainRoutes } from "router/mainRoutes";
import Header from "components/Header";
import { persistor, store } from "shared/redux/rootConfig";
import { PersistGate } from "redux-persist/es/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <MainRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App;

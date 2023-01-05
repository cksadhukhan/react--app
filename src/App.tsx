import React, { useEffect } from "react";
import { HomePage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/";
import { Loading } from "./components";
import { getUsers } from "./features";

const App: React.FC = () => {
  const { isLoading } = store.getState().user;

  useEffect(() => {
    store.dispatch(getUsers());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;

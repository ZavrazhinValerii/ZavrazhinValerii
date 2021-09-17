import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import firebase from "firebase";
import { BrowserRouter, Link, Redirect, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Profile from "./Screens/Profile";
import { Main } from "./Screens/Main";
import { Chats } from "./Screens/Chats";
import { store, persistor } from "./Store";
import { ROUTES } from "./constants";
import { MyThemeContext, MyAnotherContext } from "./context";

import "./App.css";
import { PublicRoute } from "./HOC/PublicRoute";
import { PrivateRoute } from "./HOC/PrivateRoute";
import { Signup } from "./Screens/Signup";

const App = () => {
  const [list] = useState();

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <MyThemeContext.Provider value={{ theme: "dark" }}>
          <MyAnotherContext.Provider value={{ name: "Petya" }}>
            <BrowserRouter>
              <ul>
                <li>
                  <Link to={ROUTES.MAIN}>Home</Link>
                </li>
                <li>
                  <Link to={ROUTES.PROFILE}>Profile</Link>
                </li>
                <li>
                  <Link to={ROUTES.CHATS}>Chats</Link>
                </li>
                <li>
                  <Link to={ROUTES.SIGNIN}>Login</Link>
                </li>
                <li>
                  <Link to={ROUTES.SIGNUP}>Sign up</Link>
                </li>
              </ul>
              <Switch>
                <PublicRoute
                  exact
                  path={ROUTES.MAIN}
                  authenticated={authenticated}
                >
                  <Main list={list} />
                </PublicRoute>

                <PublicRoute
                  exact
                  path={ROUTES.SIGNIN}
                  authenticated={authenticated}
                >
                  login
                </PublicRoute>

                <PublicRoute
                  exact
                  path={ROUTES.SIGNUP}
                  authenticated={authenticated}
                >
                  <Signup />
                </PublicRoute>

                <PrivateRoute
                  exact
                  path={ROUTES.PROFILE}
                  authenticated={authenticated}
                >
                  <Profile text="myText" />
                </PrivateRoute>

                <PrivateRoute
                  exact
                  path={ROUTES.CHATS}
                  authenticated={authenticated}
                >
                  <Chats />
                </PrivateRoute>

                <PrivateRoute
                  exact
                  path={ROUTES.CHAT}
                  authenticated={authenticated}
                >
                  <Chats />
                </PrivateRoute>

                <PrivateRoute
                  path={ROUTES.NOT_FOUND}
                  authenticated={authenticated}
                >
                  Page not found 404
                </PrivateRoute>
                <PrivateRoute path="*" authenticated={authenticated}>
                  <Redirect to={ROUTES.NOT_FOUND} />
                </PrivateRoute>
              </Switch>
            </BrowserRouter>
          </MyAnotherContext.Provider>
        </MyThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
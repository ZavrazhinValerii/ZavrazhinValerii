import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Profile from "./Screens/Profile";
import { Main } from "./Screens/Main";
import { Chats } from "./Screens/Chats";
import { store } from "./Store";
import { ROUTES } from "./constants";
import { MyThemeContext, MyAnotherContext } from "./context";

import "./App.css";

const App = () => {
  const [list] = useState();
  return (
    <div>
      <Provider store={store}>
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
              </ul>
              <Switch>
                <Route exact path={ROUTES.MAIN}>
                  <Main list={list} />
                </Route>
                <Route exact path={ROUTES.PROFILE}>
                  <Profile text="myText" />
                </Route>

                <Route
                  exact
                  path={ROUTES.CHATS}
                  render={() => {
                    return <Chats />;
                  }}
                ></Route>

                <Route
                  exact
                  path={ROUTES.CHAT}
                  render={() => {
                    return <Chats />;
                  }}
                ></Route>

                <Route path={ROUTES.NOT_FOUND}>Page not found 404</Route>
                <Route path="*">
                  <Redirect to={ROUTES.NOT_FOUND} />
                </Route>
              </Switch>
            </BrowserRouter>
          </MyAnotherContext.Provider>
        </MyThemeContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
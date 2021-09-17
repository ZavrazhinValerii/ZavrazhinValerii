import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../constants";

export const PrivateRoute = ({ authenticated, ...rest }) =>
  authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.SIGNIN} />;
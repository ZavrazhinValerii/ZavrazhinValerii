import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../constants";

export const PublicRoute = ({ authenticated, ...rest }) =>
  !authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.CHATS} />;
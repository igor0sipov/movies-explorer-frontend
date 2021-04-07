import { Route, Redirect } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function ProtectedRoute({
  component: Component,
  isInitialDataLoaded,
  ...props
}) {
  return isInitialDataLoaded ? (
    <Route path={props.path}>
      {props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />}
    </Route>
  ) : (
    <Preloader />
  );
}

export default ProtectedRoute;

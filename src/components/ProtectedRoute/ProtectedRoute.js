import { Route, Redirect } from "react-router-dom";
import { memo } from "react";

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route path={props.path}>
      {props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />}
    </Route>
  );
}

export default memo(ProtectedRoute, (prevProps, nextProps) => {
  console.log(prevProps.isUserDataLoaded, nextProps.isUserDataLoaded);
  if (nextProps.isUserDataLoaded === true) {
    return false;
  } else {
    return true;
  }
});

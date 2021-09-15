import { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

import routes from "./config";

const Router = () => {
  const location = useLocation();
  return (
    <Suspense fallback={null}>
      {location.pathname === "/login" ? null : <Header />}
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
      {/* {location.pathname === "/login" ? null : <Footer />} */}
    </Suspense>
  );
};

export default Router;

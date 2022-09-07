import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import TopBar from "./component/TopBar";
const WelcomeForm = lazy(() => import("./component/WelcomeForm"));
const WorkSpace = lazy(() => import("./component/WorkSpace"));
const Planning = lazy(() => import("./component/Planning"));
const Complete = lazy(() => import("./component/Complete"));
const NotFound = lazy(() => import("./component/NotFound"));

const Routes: React.FC = () => {
  return (
    <>
      <Router basename="/onBoard">
        <TopBar />
        <Suspense>
          <>
            <Switch>
              <Route exact={true} path="/" render={() => <Redirect to="/welcome" />} />
              <Route exact={true} path="/welcome" component={WelcomeForm} />
              <Route exact={true} path="/workSpace" component={WorkSpace} />
              <Route exact={true} path="/planning" component={Planning} />
              <Route exact={true} path="/complete" component={Complete} />
              <Route component={NotFound} />
            </Switch>
          </>
        </Suspense>
      </Router>
    </>
  );
};

export default Routes;

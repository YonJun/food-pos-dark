/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

const Router = () => {
  return (
    <BrowserRouter>
      <div tw="w-screen h-screen bg-dark-1 grid gap-10 grid-cols-12">
        <nav tw="col-span-1">
          <Sidebar />
        </nav>
        <main tw="col-span-11">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Router;

/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

const Nav = styled.nav`
  width: 140px;
  z-index: 1;
  overflow-x: hidden;
  ${tw`h-full fixed top-0 left-0 bg-dark-2`}
`;
const Main = styled.nav`
  margin-left: 140px;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <div tw="w-screen h-screen bg-dark-1">
        <Nav>
          <Sidebar />
        </Nav>

        <Main>
          <div tw="container mx-auto px-4 ">
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
          </div>
        </Main>
      </div>
    </BrowserRouter>
  );
};

export default Router;

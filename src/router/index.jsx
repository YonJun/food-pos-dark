/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import { FixedGridPanel } from "components/FixedGridPanel";

const Main = styled.div`
  /* margin-left: 140px; */
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  grid-gap: 20px;
  button:focus {
    outline: none;
  }
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Container tw="w-full bg-dark-1">
        <FixedGridPanel>
          <nav tw="bg-dark-2 h-screen">
            <Sidebar />
          </nav>
        </FixedGridPanel>

        <Main>
          <div tw="text-white">
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
      </Container>
    </BrowserRouter>
  );
};

export default Router;

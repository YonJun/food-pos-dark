/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Fragment } from "react";
import { H1, H2, Title } from "components/Typography";
import TxtField from "components/TxtField";
//icons
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import TabsContainer from "./layouts/TabsContainer";
import Dropdown from "./components/Dropdown";
import ProductList from "./layouts/ProductList";
import { FixedGridPanel } from "components/FixedGridPanel";
import Orders from "./layouts/Orders";
const Container = styled.div`
  display: grid;
  grid-template-columns: auto 500px;
  grid-gap: 20px;
`;
const Home = () => {
  return (
    <Fragment>
      <Container>
        <div tw="w-full flex justify-center">
          <div>
            <div tw="pt-10 sticky top-0 bg-dark-1">
              {
                //header
              }
              <div tw="flex justify-between items-center">
                <div>
                  <H1 gutterBottom>Jaegar Resto</H1>
                  <Title tw="text-tlighter">Tuesday, 2 Feb 2021</Title>
                </div>
                <div>
                  <TxtField
                    placeholder="Search for food, coffe, etc.."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon tw="text-white" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              {
                //Body
              }
              <div tw="mt-5">
                <TabsContainer />
              </div>
              <div tw="mt-10">
                <div tw="flex justify-between items-center">
                  <H2>Choose Dishes</H2>
                  <Dropdown />
                </div>
              </div>
            </div>
            <div tw="py-10">
              <ProductList />
            </div>
          </div>
        </div>
        <FixedGridPanel tw="bg-dark-2">
          <div tw="p-5">
            <Orders />
          </div>
        </FixedGridPanel>
      </Container>
    </Fragment>
  );
};

export default Home;

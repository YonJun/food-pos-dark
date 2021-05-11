/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Fragment, useState } from "react";
import { H1, H2, Title } from "components/Typography";
import TxtField from "components/TxtField";
import TabsContainer from "./layouts/TabsContainer";
import Dropdown from "./components/Dropdown";
import ProductList from "./layouts/ProductList";
import { FixedGridPanel } from "components/FixedGridPanel";
import { Orders, PayOrder } from "./layouts/Orders";
import { Drawer } from "@material-ui/core";
import Paymant from "./layouts/Paymant";
import { IconButton } from "@material-ui/core";
//icons
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 500px;
  grid-gap: 20px;
`;

const DrawerContent = styled.div`
  width: 1000px;
  height: 100%;
  display: grid;
  grid-template-columns: auto 500px;
  ${tw`bg-dark-2`}
`;

const Home = () => {
  const [isOpen, set_isOpen] = useState(true);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    set_isOpen(false);
  };
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
          <Orders onContinueToPay={() => set_isOpen(true)} />
        </FixedGridPanel>
      </Container>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <DrawerContent tw="bg-dark-2 text-white">
          <FixedGridPanel>
            <div tw="px-5 mt-5 h-16	">
              <IconButton onClick={toggleDrawer}>
                <KeyboardBackspaceIcon tw="text-white" fontSize="large" />
              </IconButton>
            </div>
            <PayOrder />
          </FixedGridPanel>
          <div tw="border-l-2 border-dark-line ">
            <div tw="mt-5 h-16	" />
            <Paymant />
          </div>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default Home;

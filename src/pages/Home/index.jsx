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
const Container = styled.div`
  display: grid;
  grid-template-columns: auto 350px;
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
        <FixedGridPanel>
          <div className="bg-gray-500">
            {[...new Array(3).keys()].map(
              (i) =>
                `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`,
            )}
          </div>
        </FixedGridPanel>
      </Container>
    </Fragment>
  );
};

export default Home;

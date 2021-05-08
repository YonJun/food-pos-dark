/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { Fragment } from "react";
import { H1, Title } from "components/Typography";
import TxtField from "components/TxtField";
//icons
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const Home = () => {
  return (
    <Fragment>
      <div tw="pt-10">
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
          //header
        }
      </div>
    </Fragment>
  );
};

export default Home;

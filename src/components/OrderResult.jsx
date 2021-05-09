/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { SvgIcon } from "@material-ui/core";
import { Fragment } from "react";
import { Grid2Cols, Grid3Cols } from "./GridCustomCols";
import TxtField from "./TxtField";
import { Trash } from "constants/icons";
import IconButton from "./IconButton";
import { Body, Caption, Title } from "./Typography";

const SBody = styled(Body)`
  width: 150px;
  ${tw`truncate`}
`;

const OrderResult = ({ img, title, price, qty }) => {
  return (
    <Fragment>
      <Grid3Cols>
        <div tw="h-full flex items-center rounded-lg">
          <img
            alt="team"
            tw="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-2"
            src="https://www.pngkit.com/png/full/54-545849_dinner-food-png-freeuse-stock-plate-of-food.png"
          />
          <div tw="flex-grow">
            <SBody gutterBottom>Spicy seasoned seafood noodles</SBody>
            <Caption tw="text-tlight">$ 2.29</Caption>
          </div>
        </div>

        <div>
          <TxtField
            inputProps={{ style: { textAlign: "center" } }} // the change is here
            fullWidth
            value={1}
          />
        </div>
        <Title>$ 4,58</Title>
      </Grid3Cols>
      <Grid2Cols>
        <div>
          <TxtField fullWidth placeholder="Order Note..." />
        </div>

        <IconButton>
          <SvgIcon component={Trash} />
        </IconButton>
      </Grid2Cols>
    </Fragment>
  );
};

export default OrderResult;

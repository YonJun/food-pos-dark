/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { SvgIcon } from "@material-ui/core";
import { Fragment } from "react";
import { Grid2Cols } from "./GridCustomCols";
import TxtField from "./TxtField";
import { Trash } from "constants/icons";
import IconButton from "./IconButton";

const OrderResult = ({ img, title, price, qty }) => {
  return (
    <Fragment>
      <Grid2Cols>
        <div>
          <TxtField fullWidth placeholder="Order Note..." />
        </div>
        <IconButton>
          <SvgIcon color="primary" component={Trash} />
        </IconButton>
      </Grid2Cols>
    </Fragment>
  );
};

export default OrderResult;

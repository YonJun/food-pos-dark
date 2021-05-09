/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Title, H2 } from "components/Typography";
import { Fragment } from "react";
import { Button } from "@material-ui/core";
import { Grid3Cols } from "components/GridCustomCols";
import OrderResult from "components/OrderResult";

const Orders = () => {
  return (
    <Fragment>
      <div>
        <H2>Orders #34562</H2>
        <div tw="mt-7 inline-flex space-x-4">
          <Button color="primary" variant="contained">
            Dine In
          </Button>
          <Button color="primary" variant="outlined">
            Dine In
          </Button>
          <Button color="primary" variant="outlined">
            Dine In
          </Button>
        </div>
        <div tw="mt-7">
          <Grid3Cols>
            <Title>Item</Title>
            <Title>Qty</Title>
            <Title>Price</Title>
          </Grid3Cols>
        </div>
        <hr tw="my-7 border-dark-line" />
        <div tw="space-y-6">
          {[...new Array(5).keys()].map((i) => (
            <OrderResult key={i} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Orders;

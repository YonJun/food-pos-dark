/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Title, H2, H1, Body } from "components/Typography";
import { Fragment } from "react";
import { Button } from "@material-ui/core";
import { Grid3Cols } from "components/GridCustomCols";
import OrderResult from "components/OrderResult";
import { FixedGridPanel } from "components/FixedGridPanel";

import AddIcon from "@material-ui/icons/Add";
import { IconButtonFilled } from "components/IconButton";

const BottomResult = styled(FixedGridPanel)`
  bottom: 0;
  height: ${({ height = 200 }) => `${height}px`};
  ${tw`bg-dark-2`}
`;

const Base = ({ header = <div />, bottom = <div /> }) => {
  return (
    <Fragment>
      <div tw="p-5">
        {header}
        <hr tw="my-7 border-dark-line" />
        <div tw="space-y-6">
          {[...new Array(5).keys()].map((i) => (
            <OrderResult key={i} />
          ))}
        </div>
      </div>
      {bottom}
    </Fragment>
  );
};

export const Orders = ({ onContinueToPay = () => {} }) => {
  return (
    <Base
      header={
        <>
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
        </>
      }
      bottom={
        <>
          <BottomResult>
            <div tw="px-5">
              <hr tw="border-dark-line" />
            </div>
            <div tw="p-5">
              <div tw="space-y-3">
                <div tw="flex justify-between">
                  <Body tw="text-tlight">Discount</Body>
                  <Title>$ 0</Title>
                </div>
                <div tw="flex justify-between">
                  <Body tw="text-tlight">Sub total</Body>
                  <Title> $ 21,03</Title>
                </div>
              </div>
              <div tw="mt-12">
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={onContinueToPay}>
                  Continue to Payment
                </Button>
              </div>
            </div>
          </BottomResult>
        </>
      }
    />
  );
};

export const PayOrder = () => {
  return (
    <Base
      header={
        <>
          <div tw="flex justify-between items-center">
            <div>
              <H1 gutterBottom>Confirmation</H1>
              <Title tw="text-tlight">Orders #34562</Title>
            </div>
            <IconButtonFilled>
              <AddIcon fontSize="large" />
            </IconButtonFilled>
          </div>
        </>
      }
      bottom={
        <>
          <BottomResult height={110}>
            <div tw="px-5">
              <hr tw="border-dark-line" />
            </div>
            <div tw="p-5">
              <div tw="space-y-3">
                <div tw="flex justify-between">
                  <Body tw="text-tlight">Discount</Body>
                  <Title>$ 0</Title>
                </div>
                <div tw="flex justify-between">
                  <Body tw="text-tlight">Sub total</Body>
                  <Title> $ 21,03</Title>
                </div>
              </div>
            </div>
          </BottomResult>
        </>
      }
    />
  );
};

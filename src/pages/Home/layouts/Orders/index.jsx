/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Title, H2 } from "components/Typography";
import { Fragment } from "react";
import { Button } from "@material-ui/core";

const BaseGrid = styled.div`
  display: grid;

  grid-gap: 20px;
`;
const Grid3Cols = styled(BaseGrid)`
  grid-template-columns: auto 50px 50px;
`;

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
        <div tw="my-7">
          <Grid3Cols>
            <Title>Item</Title>
            <Title>Qty</Title>
            <Title>Price</Title>
          </Grid3Cols>
        </div>
        <hr tw="border-dark-line" />
      </div>
    </Fragment>
  );
};

export default Orders;

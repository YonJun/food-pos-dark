/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { Body, H1, H2, Title } from "components/Typography";
import { Fragment } from "react";
import GroupPaymantMethod from "components/GroupPaymantMethod";
import TxtField from "components/TxtField";
import Dropdown from "pages/Home/components/Dropdown";
import { Button } from "@material-ui/core";

const Paymant = () => {
  return (
    <Fragment>
      <div tw="p-5">
        <H1 gutterBottom>Orders #34562</H1>
        <Title tw="text-tlight">3 payment method available</Title>
        <hr tw="my-7 border-dark-line" />
        <H2 gutterBottom>Payment Method</H2>
        <GroupPaymantMethod />

        <div tw="mt-4">
          <div tw="space-y-5">
            <div tw="flow-root">
              <Body gutterBottom>Cardholder Name</Body>
              <TxtField value="Levi Ackerman" fullWidth />
            </div>
            <div tw="flow-root">
              <Body gutterBottom>Cardholder Name</Body>
              <TxtField value="2564 1421 0897 1244" fullWidth />
            </div>
            <div tw="flow-root inline-flex space-x-4">
              <div tw="flex-1">
                <Body gutterBottom>Expiration Date</Body>
                <TxtField value="02/2022" fullWidth />
              </div>
              <div tw="flex-1">
                <Body gutterBottom>CVV</Body>
                <TxtField fullWidth type="password" value="123" />
              </div>
            </div>
          </div>
        </div>
        <hr tw="my-7 border-dark-line" />
        <div tw="flex space-x-4">
          <div tw="flex-1">
            <Body gutterBottom>Order Type</Body>
            <Dropdown fullWidth />
          </div>
          <div tw="flex-1">
            <Body gutterBottom>Table no.</Body>
            <TxtField fullWidth value="140" />
          </div>
        </div>

        <div tw="flex space-x-4 mt-10">
          <div tw="flex-1">
            <Button fullWidth size="large" color="primary" variant="outlined">
              Cancel
            </Button>
          </div>
          <div tw="flex-1">
            <Button fullWidth size="large" color="primary" variant="contained">
              Confirm Payment
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Paymant;

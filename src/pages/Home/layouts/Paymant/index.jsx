/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { H1, H2, Title } from "components/Typography";
import { Fragment } from "react";
import GroupPaymantMethod from "components/GroupPaymantMethod";

const Paymant = () => {
  return (
    <Fragment>
      <div tw="p-5">
        <H1 gutterBottom>Orders #34562</H1>
        <Title tw="text-tlight">3 payment method available</Title>
        <hr tw="my-7 border-dark-line" />
        <H2 gutterBottom>Payment Method</H2>
        <GroupPaymantMethod />
      </div>
    </Fragment>
  );
};

export default Paymant;

/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { H2, Title } from "components/Typography";
import { Fragment } from "react";

const Paymant = () => {
  return (
    <Fragment>
      <div tw="p-5">
        <H2 gutterBottom>Orders #34562</H2>
        <Title tw="text-tlight">3 payment method available</Title>
      </div>
    </Fragment>
  );
};

export default Paymant;

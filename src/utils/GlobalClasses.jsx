/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Fragment } from "react";
const Container = styled.div`
  h1 {
    ${tw`text-white text-3xl `}
  }
`;
const GlobalClasses = ({ children }) => {
  return (
    <Fragment>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default GlobalClasses;

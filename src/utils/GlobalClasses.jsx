/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Fragment } from "react";
const Container = styled.div`
  h1 {
    ${tw`text-3xl `}
  }
  h2 {
    ${tw`text-2xl `}
  }
  .title {
    font-size: 16px;
  }

  .body {
    font-size: 14px;
  }

  .caption {
    ${tw`text-xs `}
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

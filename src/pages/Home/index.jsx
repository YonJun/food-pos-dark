/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { Fragment } from "react";
import { H1, H2, Title, Body, Caption } from "components/Typography";

const Home = () => {
  return (
    <Fragment>
      <H1>h1. Jaegar Resto</H1>
      <H2>h2. Orders #34562</H2>
      <Title>title-1. TypoTuesday, 2 Feb 2021</Title>
      <Body>body-1. Spicy seasoned seafood noodles</Body>
      <Caption>caption. $ 2.29</Caption>
    </Fragment>
  );
};

export default Home;

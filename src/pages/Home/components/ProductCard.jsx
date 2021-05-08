/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Fragment } from "react";
import { Body } from "components/Typography";

const ImgContainer = styled.div`
  margin-top: -40px;
`;
const Img = styled.img`
  max-width: 130px;
`;

const ProductCard = ({ title = "", price = "", qty = 0 }) => {
  return (
    <Fragment>
      <div tw="p-5 bg-dark-2 rounded-3xl text-center hover:cursor-pointer">
        <ImgContainer tw="flex justify-center">
          <Img
            alt="Bowl of food"
            tw="w-full h-auto block"
            src="https://www.pngkit.com/png/full/54-545849_dinner-food-png-freeuse-stock-plate-of-food.png"
          />
        </ImgContainer>
        <div tw="pt-5">
          <Body gutterBottom>{title}</Body>
          <Body gutterBottom>$ {price}</Body>
          <Body gutterBottom tw="text-tlight">
            {qty} Bowls available
          </Body>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;

/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Fragment } from "react";

const ImgContainer = styled.div`
  margin-top: -40px;
`;
const Img = styled.img`
  max-width: 130px;
`;

const ProductCard = () => {
  return (
    <Fragment>
      <div tw="p-5 bg-dark-2 rounded-3xl">
        <ImgContainer tw="flex justify-center">
          <Img
            alt="plate of food"
            tw="w-full h-auto block"
            src="https://www.pngkit.com/png/full/54-545849_dinner-food-png-freeuse-stock-plate-of-food.png"
          />
        </ImgContainer>
        <div tw="">ProductCard</div>
      </div>
    </Fragment>
  );
};

export default ProductCard;

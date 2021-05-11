/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { Fragment } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  return (
    <Fragment>
      <div tw="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
        {[...new Array(9).keys()].map((i) => (
          <ProductCard
            key={i}
            title={"Spicy seasoned seafood noodles"}
            price={"2.29"}
            qty={20}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductList;

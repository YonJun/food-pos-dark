/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { Fragment } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  return (
    <Fragment>
      <div tw="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {[...new Array(10).keys()].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductList;

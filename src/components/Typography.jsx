/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
export const H1 = ({ children }) => (
  <p tw="text-h1 font-semibold">{children}</p>
);
export const H2 = ({ children }) => <p tw="text-h2 font-medium">{children}</p>;
export const Title = ({ children }) => (
  <p tw="text-title font-normal  ">{children}</p>
);
export const Body = ({ children }) => <p tw="text-body">{children}</p>;
export const Caption = ({ children }) => <p tw="text-caption">{children}</p>;

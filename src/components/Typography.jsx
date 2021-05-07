/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { css } from "twin.macro";
export const H1 = ({ children, gutterBottom = false }) => (
  <p
    css={[
      tw`text-h1 font-semibold`, // Add base styles first
      (gutterBottom !== undefined && gutterBottom !== false) === true &&
        tw`mb-1`,
    ]}>
    {children}
  </p>
);
export const H2 = ({ children, gutterBottom = false }) => (
  <p
    css={[
      tw`text-h2 font-medium`, // Add base styles first
      (gutterBottom !== undefined && gutterBottom !== false) === true &&
        tw`mb-1`,
    ]}>
    {children}
  </p>
);
export const Title = ({ children, gutterBottom = false }) => (
  <p
    css={[
      tw`text-title font-normal`, // Add base styles first
      (gutterBottom !== undefined && gutterBottom !== false) === true &&
        tw`mb-1`,
    ]}>
    {children}
  </p>
);
export const Body = ({ children, gutterBottom = false }) => (
  <p
    css={[
      tw`text-body`, // Add base styles first
      (gutterBottom !== undefined && gutterBottom !== false) === true &&
        tw`mb-1`,
    ]}>
    {children}
  </p>
);
export const Caption = ({ children, gutterBottom = false }) => (
  <p
    css={[
      tw`text-caption`, // Add base styles first
      (gutterBottom !== undefined && gutterBottom !== false) === true &&
        tw`mb-1`,
    ]}>
    {children}
  </p>
);

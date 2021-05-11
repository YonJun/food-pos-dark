/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";

export const H1 = styled.p(({ gutterBottom }) => [
  tw`text-h1 font-semibold `,
  (gutterBottom !== undefined && gutterBottom !== false) === true && tw`mb-3`,
]);
export const H2 = styled.p(({ gutterBottom }) => [
  tw`text-h2 font-medium`,
  (gutterBottom !== undefined && gutterBottom !== false) === true && tw`mb-3`,
]);
export const Title = styled.p(({ gutterBottom }) => [
  tw`text-title font-normal`,
  (gutterBottom !== undefined && gutterBottom !== false) === true && tw`mb-3`,
]);
export const Body = styled.p(({ gutterBottom }) => [
  tw`text-body`,
  (gutterBottom !== undefined && gutterBottom !== false) === true && tw`mb-3`,
]);
export const Caption = styled.p(({ gutterBottom }) => [
  tw`text-caption`,
  (gutterBottom !== undefined && gutterBottom !== false) === true && tw`mb-3`,
]);

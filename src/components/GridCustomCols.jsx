/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";

const BaseGrid = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 20px;
`;
export const Grid3Cols = styled(BaseGrid)`
  grid-template-columns: auto 50px 50px;
`;

export const Grid2Cols = styled(BaseGrid)`
  grid-template-columns: auto 50px;
`;

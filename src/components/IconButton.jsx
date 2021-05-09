/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
const Btn = styled.div`
  ${tw`box-border	 border-2 border-primary rounded-lg`}
  text-align:center;
  line-height: 50px;
  width: 60px;
  height: 60px;

  path {
    ${tw`fill-current text-primary`}
  }
`;

const IconButton = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default IconButton;

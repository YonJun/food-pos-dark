/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { ButtonBase } from "@material-ui/core";
import tw, { styled } from "twin.macro";
const Btn = styled.div`
  ${tw`box-border	 border-2 border-primary rounded-lg `}
  text-align:center;
  line-height: 45px;
  width: 55px;
  height: 55px;

  path {
    ${tw`fill-current text-primary`}
  }
`;
const BaseBtn = styled(ButtonBase)`
  &.MuiButtonBase-root {
    ${tw`rounded-lg`}
  }
`;

const IconButton = ({ children }) => {
  return (
    <div>
      <BaseBtn>
        <Btn>{children}</Btn>
      </BaseBtn>
    </div>
  );
};

export default IconButton;

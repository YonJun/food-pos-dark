/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { ButtonBase } from "@material-ui/core";
import tw, { styled } from "twin.macro";

const TemplateBtn = styled.div`
  text-align: center;
  line-height: 45px;
  width: 55px;
  height: 55px;
`;
const Btn = styled(TemplateBtn)`
  ${tw`box-border	 border-2 border-primary rounded-lg `}

  path {
    ${tw`fill-current text-primary`}
  }
`;
const BtnFilled = styled(TemplateBtn)`
  ${tw`bg-primary rounded-lg `}

  path {
    ${tw`fill-current text-white`}
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
export const IconButtonFilled = ({ children }) => {
  return (
    <div>
      <BaseBtn>
        <BtnFilled>{children}</BtnFilled>
      </BaseBtn>
    </div>
  );
};

export default IconButton;

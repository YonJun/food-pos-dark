/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { theme, styled } from "twin.macro";
import { TextField } from "@material-ui/core";

const TxtField = styled(TextField)`
  background-color: ${theme`colors.form-bg`};
  border-radius: 8px;

  fieldset {
    border-radius: 8px;
    border-color: ${theme`colors.dark-line`};
  }
  .MuiInputBase-input {
    color: ${theme`colors.tlighter`};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${theme`colors.tgray`};
    }
    :-ms-input-placeholder {
      color: ${theme`colors.tgray`};
    }
  }
`;
export default TxtField;

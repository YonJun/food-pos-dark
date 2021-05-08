/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { Popover, SvgIcon } from "@material-ui/core";
import { Body } from "components/Typography";
import { ArrowIosDown } from "constants/icons";

const Input = styled.div`
  ${tw`bg-dark-2 hover:cursor-pointer p-3 pt-4  rounded-xl flex`}
`;
const MItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    ${tw`bg-dark-1 text-white`}
  }
`;
const PopoverStyled = styled(Popover)`
  & > .MuiPopover-paper {
    ${tw`bg-dark-2`}
  }
`;
export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Input onClick={handleClick}>
        <SvgIcon component={ArrowIosDown} />
        <Body tw="pl-2 ">Dine In</Body>
      </Input>
      <PopoverStyled
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        <MItem dense onClick={handleClose}>
          Profile
        </MItem>
        <MItem dense onClick={handleClose}>
          My account
        </MItem>
        <MItem dense onClick={handleClose}>
          Logout
        </MItem>
      </PopoverStyled>
    </div>
  );
}

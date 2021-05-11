/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled } from "twin.macro";
import { Fragment, useState } from "react";
import { SvgIcon } from "@material-ui/core";
import { Body } from "./Typography";
import { Paypal, Card, Wallet } from "constants/icons";

const Item = styled.div`
  min-width: 120px;
  ${tw`py-2 px-5 flex flex-col items-center justify-center border border-dark-line rounded-lg text-tlight `}
  &:hover {
    cursor: pointer;
  }
  path {
    ${tw`fill-current text-tlight`}
  }

  ${({ selected }) => selected && tw`bg-dark-1 text-white border-tlight`}
  path {
    ${({ selected }) => selected && tw`fill-current text-white`}
  }
`;

const Method = ({ icon, label, selected = false, onClick }) => {
  return (
    <Item selected={selected} onClick={onClick}>
      <div tw="mb-2">
        <SvgIcon component={icon} />
      </div>
      <Body>{label}</Body>
    </Item>
  );
};

const GroupPaymantMethod = () => {
  const [index, set_index] = useState(0);
  return (
    <Fragment>
      <div tw="inline-flex space-x-4">
        <Method
          icon={Paypal}
          label="Paypal"
          selected={index === 0}
          onClick={() => set_index(0)}
        />
        <Method
          icon={Card}
          label="Credit Card"
          selected={index === 1}
          onClick={() => set_index(1)}
        />
        <Method
          icon={Wallet}
          label="Cash"
          selected={index == 2}
          onClick={() => set_index(2)}
        />
      </div>
    </Fragment>
  );
};

export default GroupPaymantMethod;

/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled, theme } from "twin.macro";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { SvgIcon } from "@material-ui/core";

//Icons
import {
  AboutUs,
  Add,
  Appereance,
  ArrowDown,
  ArrowUp,
  Back,
  Card,
  Coin,
  Customer,
  Dashboard,
  Discount,
  Edit,
  Export,
  Home,
  LogOut,
  Message,
  Notification,
  Option,
  Order,
  Paypal,
  Print,
  Restaurant,
  Security,
  Setting,
  Trash,
  Wallet,
} from "constants/icons";

const Li = styled.li`
  height: 12%;

  ${tw` flex justify-center items-center`}

  path {
    ${tw`fill-current text-primary`}
  }
  .active {
    ${tw`bg-primary rounded-xl`}
    path {
      ${tw`fill-current text-white`}
    }
  }
`;

const CustomLi = styled(Li)`
  height: 15%;
`;

const Item = styled.div`
  ${tw` text-white p-5  relative`}
`;
const CustomItem = styled.div`
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  ${tw`bg-primary w-full h-full p-5 rounded-xl`}
`;
const ListLink = [
  {
    key: "1",
    Icon: Home,
    to: "/",
  },
  {
    key: "2",
    Icon: Discount,
    to: "/2",
  },
  {
    key: "3",
    Icon: Dashboard,
    to: "/3",
  },
  {
    key: "4",
    Icon: Message,
    to: "/4",
  },
  {
    key: "5",
    Icon: Notification,
    to: "/5",
  },
  {
    key: "6",
    Icon: Setting,
    to: "/6",
  },
];
const Sidebar = () => {
  return (
    <Fragment>
      <ul tw="h-full bg-dark-2">
        <Li>
          <Item>
            <CustomItem />
            <SvgIcon component={Restaurant} />
          </Item>
        </Li>

        {ListLink.map(({ key, Icon, to }) => (
          <Li key={key}>
            <NavLink exact to={to} activeClassName="active">
              <Item>
                <SvgIcon component={Icon} />
              </Item>
            </NavLink>
          </Li>
        ))}
        <CustomLi>
          <Item>
            <SvgIcon component={LogOut} />
          </Item>
        </CustomLi>
      </ul>
    </Fragment>
  );
};

export default Sidebar;

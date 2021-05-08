/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled, theme } from "twin.macro";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { SvgIcon } from "@material-ui/core";

//Icons
import {
  Dashboard,
  Discount,
  Home,
  LogOut,
  Message,
  Notification,
  Restaurant,
  Setting,
} from "constants/icons";

const Li = styled.li`
  height: 110px;
  /* border: 1px solid tomato; */
  ${tw`flex w-full justify-end`}

  path {
    ${tw`fill-current text-primary`}
  }

  .active {
    /* ${tw`bg-primary`} */
    ${tw`bg-dark-1`}
    path {
      ${tw`fill-current text-white`}
    }
  }
  .active {
    ${tw`bg-dark-1`}
    path {
      ${tw`fill-current text-white`}
    }
  }
  .active .item {
    ${tw`bg-primary`}/* border: 1px solid tomato; */
  }

  .link {
    border-radius: 17px 0 0 17px;
    position: relative;
  }

  .link::after,
  .link::before {
    content: "";
    position: absolute;
    right: 0;
    height: 50px;
  }

  .link::after {
    top: -50px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 0 0 0 ${theme`colors.dark-1`};
  }
  .link::before {
    bottom: -50px;
    border-top-right-radius: 20px;
    box-shadow: 0 0 0 0 ${theme`colors.dark-1`};
  }
  .active::before,
  .active::after {
    width: 15px;
  }

  .active::after {
    box-shadow: 0 40px 0 0 ${theme`colors.dark-1`};
  }
  .active::before {
    box-shadow: 0 -40px 0 0 ${theme`colors.dark-1`};
  }
`;

const CustomLi = styled(Li)`
  height: 15%;
`;

const ItemContainer = styled.div`
  width: 105px;
  height: 100%;
  /* border: 1px solid green; */

  ${tw`p-5`}
`;

const Item = styled.div`
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  /* border: 1px solid pink; */
  ${tw`text-white rounded-xl  relative`}
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
      <ul tw="h-full">
        <Li>
          <ItemContainer>
            <Item>
              <CustomItem />
              <SvgIcon component={Restaurant} />
            </Item>
          </ItemContainer>
        </Li>

        {ListLink.map(({ key, Icon, to }) => (
          <Li key={key}>
            <NavLink exact to={to} activeClassName="active" className="link">
              <ItemContainer>
                <Item className="item">
                  <SvgIcon component={Icon} />
                </Item>
              </ItemContainer>
            </NavLink>
          </Li>
        ))}
        <CustomLi>
          <ItemContainer>
            <Item>
              <SvgIcon component={LogOut} />
            </Item>
          </ItemContainer>
        </CustomLi>
      </ul>
    </Fragment>
  );
};

export default Sidebar;

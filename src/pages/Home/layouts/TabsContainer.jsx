/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { theme } from "twin.macro";
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Body } from "components/Typography";

const StyledTabs = withStyles({
  root: {
    borderBottom: `1px solid ${theme`colors.dark-line`}`,
  },
  indicator: {
    maxWidth: 30,
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
}));
const StyledTab = withStyles(() => ({
  root: {
    color: "#fff",
    width: "auto",
    minWidth: 0,

    padding: "0 35px 0 0",
  },
}))((props) => <Tab disableRipple {...props} />);
export default function TabsContainer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="styled tabs example">
        {[
          "Hot Dishes",
          "Cold Dishes",
          "Soup",
          "Grill",
          "Appetizer",
          "Dessert",
        ].map((tab) => (
          <StyledTab
            key={tab}
            tw="focus:outline-none"
            label={<Body tw="capitalize">{tab}</Body>}
          />
        ))}
      </StyledTabs>
    </div>
  );
}

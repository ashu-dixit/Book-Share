import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import { NavLink } from "react-router-dom";
import Books from "@material-ui/icons/Book";
import Profile from "@material-ui/icons/AccountBox";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  active_class: {
    color: "green",
    textDecorationLine: "none",
  },
  linktag: {
    color: "black",
    textDecorationLine: "none",
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <NavLink
          to="/"
          activeClassName={classes.active_class}
          className={classes.linktag}
        >
          <ListItem button>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/mybooks"
          activeClassName={classes.active_class}
          className={classes.linktag}
        >
          <ListItem button>
            <ListItemIcon>
              <Books />
            </ListItemIcon>
            <ListItemText primary={"My Books"} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/profile"
          activeClassName={classes.active_class}
          className={classes.linktag}
        >
          <ListItem button>
            <ListItemIcon>
              <Profile />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <NavLink
          to="/upload"
          activeClassName={classes.active_class}
          className={classes.linktag}
        >
          <ListItem button>
            <ListItemIcon>
              <Books />
            </ListItemIcon>
            <ListItemText primary={"Upload Book"} />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}

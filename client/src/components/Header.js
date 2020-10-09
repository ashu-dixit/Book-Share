import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {fetchUsername} from '../redux/user/userAction'
import { useSelector } from "react-redux/lib/hooks/useSelector";
import { useDispatch } from "react-redux/lib/hooks/useDispatch";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Header(props) {
  const data = useSelector(state => state.user)
  const dispatch = useDispatch()
  const classes = useStyles();
  const loginWith = () => {
    Axios.get('/login')
  }
  const userIcon = () => {
    console.log(data);
    switch (data){
      case null: return <div>loading...</div>
      case false: return <Button color="inherit" onClick={() => { loginWith() }}>Login</Button>
      default: return <div>Logout</div>
    }
  }
  useEffect(() => dispatch(fetchUsername()),[])
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> 
        <Typography variant="h6" className={classes.title}>
          Books
        </Typography>
          {userIcon()}
      </Toolbar>
    </AppBar>
  );
}

export default Header
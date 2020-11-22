import React, { useEffect } from "react";
import { Button, Avatar, Menu, MenuItem } from "@material-ui/core";
import { fetchUsername } from "../redux/user/userAction";
import { useSelector } from "react-redux/lib/hooks/useSelector";
import { useDispatch } from "react-redux/lib/hooks/useDispatch";
import Axios from "axios";
function UserIcon(props) {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const loginWith = () => {
    Axios.get("/login/google")
      .then()
      .catch((err) => alert(err));
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logouthandle = () => {
    Axios.get("/login/logout");
    setAnchorEl(null);
  };
  const userIcon = () => {
    switch (data) {
      case null:
        return <div>loading...</div>;
      case false:
        return (
          <Button
            color="inherit"
            onClick={() => {
              loginWith();
            }}
          >
            Login
          </Button>
        );
      default:
        return (
          <div>
            <Avatar alt="Remy Sharp" src={data.photo} onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={logouthandle}>Logout</MenuItem>
            </Menu>
          </div>
        );
    }
  };
  useEffect(() => dispatch(fetchUsername()), []);
  return userIcon();
}

export default UserIcon;

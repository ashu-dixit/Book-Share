import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchUsername } from "../redux/user/userAction";

export default function ButtonAppBar(props) {

    const data = useSelector((state) => state.user);
    console.log(data + " as")
  const dispatch = useDispatch();
useEffect(() => dispatch(fetchUsername()), []);
  return <div></div>;
}

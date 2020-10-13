import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ButtonAppBar(props) {
  const data = useSelector((state) => state.user);

  const ProfileData = () => {
    switch (data) {
      case null:
        return "Loading....";
      case false:
        return "Login first";
      default:
        return <div> {data.name}</div>;
    }
  };

  return ProfileData();
}

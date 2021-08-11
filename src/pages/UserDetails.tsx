import React from "react";
import { UserContext } from "../contexts/userContext";

const UserDetails = () => {
  const { userData } = React.useContext(UserContext);
  return <div>{JSON.stringify(userData)}</div>;
};

export default UserDetails;

import React, { useContext } from "react";
import UserContext from "./user.context";

export default function Header() {
  const context = useContext(UserContext);

  return (
    <div>
      <h1> Hello: {context.user[0]}</h1>
    </div>
  );
}

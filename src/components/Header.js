import React, { useContext } from "react";
import useUser from "../hooks/useUser";


export default function Header() {

  const context = useUser();

  const { user, todos } = context;
  const [todoList, _] = todos;

  return (
    <div>
      <h1>Hola: {user[0]} todos: {todoList.length} </h1>
    </div>
  );
}
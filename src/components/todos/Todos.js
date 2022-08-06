
import useUser from "../../hooks/useUser";
import Form from "./Form";
import React from "react";

export default function Todos() {
  const context = useUser();
  const { todos } = context;
  const [todoList, setTodoList] = todos;
  return (
    <div>
      <h1>Todos</h1>
      <Form/>
      {
        todoList.map((todo, index) =>  <p key={index}>{todo}</p>)
      }
    </div>
  )
}

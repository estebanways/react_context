import { useState } from "react";

export default function useTodos() {

  const [todos, setTodos] = useState([]);

  const updateTodos = (todo) => {
    setTodos([...todos, todo]);
  }
  // update
  // delete 
  // clear
  return [todos, updateTodos];
  // return { todos, updateTodos };
}
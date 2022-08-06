import { useState } from "react";
import useUser from "../../hooks/useUser";


export default function Form() {
  const context = useUser();
  const { todos } = context;
  const [todoList, setTodoList] = todos;
  const [newItem, setNewItem] = useState(undefined);

  function addTodo(e) {
    e.preventDefault();
    setTodoList(newItem);
    setNewItem('');
  }

  return (
    <div>
      <form onSubmit={(e) => addTodo(e)}>
        <input
          tipe="text"
          placeholder="Ingresa todo"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}
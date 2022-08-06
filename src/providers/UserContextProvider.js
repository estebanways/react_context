import { useState } from 'react';
import UserContext from '../context/UserContext';
import useTodos from '../hooks/useTodos';

function UserContextProvider({children}) {

  const names = ["juan", "pedro", "maria"];
  const [user, setUser] = useState(null);
  // crear un customHook solo para usuario
  const [todos, setTodos] = useTodos();


  const updateUser = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    setUser(name);
  }

  const userData = {
    user: [user, updateUser],
    todos: [todos, setTodos]
  }
  // get a una api que retorne los valores del usuario
  
   // state 
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>

  );
}

export default UserContextProvider;

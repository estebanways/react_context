import { createContext } from "react";

const UserContext = createContext({
  user: ['', () => {}], // const [user, setUser] = useState(null);
  todos: [[], () => {}], // const [todos, setTodos] = useState([]);
});

export default UserContext;
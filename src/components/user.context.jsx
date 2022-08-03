import { createContext } from "react";

const UserContext = createContext({
  user: [null, () => {} ],  // const [user, setUser] = useState(null);
});

export default UserContext;

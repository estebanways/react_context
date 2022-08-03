import { useContext } from "react";
import UserContext from "./user.context";
import ProfileChild from "./ProfileChild";

export default function Profile() {
  const context = useContext(UserContext);
  const { user } = context;
  const [name, setName] = user;

  return (
    <div>
      <h1> Hello: {name}. Here is your Profile</h1>
      <button onClick={() => setName("Esteban")}>Change name</button>
      <ProfileChild />
    </div>
  );
}
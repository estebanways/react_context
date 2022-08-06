import useUser from "../hooks/useUser";
import ProfileChild from "./ProfileChild";

export default function Profile() {

  const context = useUser();
  const { user } = context;
  const [name, setName] = user;
  return (
    <div>
      <h1>Hola: {name} aquí esta tu perfil</h1>
      <button onClick={setName}>Cambiar nombre</button>
      <ProfileChild/>
    </div>
  );
}
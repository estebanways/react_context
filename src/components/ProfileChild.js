import useUser from "../hooks/useUser";


export default function ProfileChild() {
  const context = useUser();
  const { user } = context;
  const [name, setName] = user;
  return (
    <div>
      <p> hola {name}, soy hijo de profile</p>
    </div>
  );
}
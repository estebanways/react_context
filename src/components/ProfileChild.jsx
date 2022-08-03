import useUser from '../hooks/useUser';

export default function ProfileChild() {
  const context = useUser();
  const { user } = context;
  const [name, setName] = user;

  return (
    <div>
      <p>Hello {name}, I am a child of Profile</p>
    </div>
  );
}

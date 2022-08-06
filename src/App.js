import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Todos from './components/todos/Todos';
import UserContextProvider from './providers/UserContextProvider';

function App() {

  return (

    <UserContextProvider>
      <Header/>
      <Profile/>
      <Todos/>
    </UserContextProvider>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import UserContext from './components/user.context';

function App() {
  // This can be put outside in another
  // functon so it looks better
  const [user, setUser] = useState(null);
  const userData = {
    user: [user, setUser],
  }

  // 'GET' to an API that returns the user values

  // State
  return (
    <UserContext.Provider value={userData}>
      {/* component => child => granchild */}
      <Header />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;

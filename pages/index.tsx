import type { NextPage } from 'next';
import { useEffect, useState } from 'react'
import App from '../components/app/App'
import Login from '../components/auth/Login'

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!window.localStorage.getItem('token'));
  });

  return !isLoggedIn ? (
    <section>
      <title>yNotes :: Login Page</title>
      <Login />
    </section>
  ) :
    (
      <section>
        <title>yNotes :: Home Page</title>
        <App />
      </section>
    );
}

export default Home

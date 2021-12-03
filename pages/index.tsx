import type { NextPage } from 'next'
import { useEffect } from 'react'
import App from '../components/app/App'
import Login from '../components/auth/Login'

const Home: NextPage = () => {
  let logged = false;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      logged = !!window.localStorage.getItem('token');
    }
  });

  return !logged ? (
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

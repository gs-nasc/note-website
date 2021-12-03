import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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

  return (!logged) ? (<Login />) : <App />;
}

export default Home

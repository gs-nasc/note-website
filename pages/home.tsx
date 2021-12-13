import { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";
import App from '../components/app/App';

const Home: NextPage = () => {
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            Router.push('/login');
        }
    });
    return (
        <section>
            <title>yNotes :: Home Page</title>
            <App />
        </section>
    )
};

export default Home
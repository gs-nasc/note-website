import { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";
import LoginPage from '../components/auth/Login';

const Login: NextPage = () => {
    useEffect(() => {
        if(localStorage.getItem('token')) {
            Router.push('/home');
        }
    });
    return (
        <section>
            <title>yNotes :: Login Page</title>
            <LoginPage />
        </section>
    )
};

export default Login
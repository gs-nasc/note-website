import { NextPage } from "next";
import LoginPage from '../components/auth/Login';

const Login: NextPage = () => {
    return (
        <section>
            <title>yNotes :: Login Page</title>
            <LoginPage />
        </section>
    )
};

export default Login
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Illustration from './Illustration';
import { MailIcon, LockClosedIcon, CodeIcon } from '@heroicons/react/outline';
import theme from "../../utils/theme";

const Login: NextPage = () => {
    const [color, setColor] = useState('');

    useEffect(() => {
        const color = theme.getUserColor();
        setColor(color);
    }, []);

    return (
        <section className="w-full min-h-screen top-0 bg-gray-900 flex flex-col justify-center items-center">
            <div className="mt-auto flex flex-col md:w-3/4 md:flex-row">
                <h1 className="md:hidden mb-12 text-center text-4xl font-bold text-white opacity-90">yNotes</h1>
                <div className="md:w-1/2 md:rounded-l-3xl md:px-16 md:py-40 hidden md:flex flex-row justify-center items-center" style={{ background: color, transition: 'all', transitionDuration: '0.1s' }}>
                    <Illustration color={color} height="auto" width="60%" />
                </div>
                <div className="md:w-1/2 md:rounded-l-none md:rounded-r-3xl md:py-0 md:px-16 rounded-3xl md:mx-0 bg-gray-700 py-12 mx-6 px-6 flex flex-row items-center justify-center">
                    <div className="md:w-3/4">
                        <div className="md:text-left text-white text-3xl font-bold text-center">
                            Login
                        </div>
                        <section>
                            <div className="mt-5 flex flex-row items-center bg-gray-200 rounded-lg">
                                <input type="text"
                                    className="w-full pl-4 pr-10 py-3 leading-none shadow-sm focus:outline-none focus:shadow-outline text-gray-700 bg-transparent"
                                    placeholder="Email" id="email" />
                                <label htmlFor="email">
                                    <MailIcon className="h-5 w-5 mr-3 text-gray-400 font-bold" />
                                </label>
                            </div>
                            <div className="mt-5 flex flex-row items-center bg-gray-200 rounded-lg">
                                <input type="text"
                                    className="w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-700 bg-transparent"
                                    placeholder="Password" id="password" />
                                <label htmlFor="password">
                                    <LockClosedIcon className="h-5 w-5 mr-3 text-gray-400 font-bold" />
                                </label>
                            </div>
                        </section>
                        <div className="flex flex-row justify-between items-center">
                            <button className="md:w-auto md:mr-0 mr-2 w-full mt-5 px-4 py-2 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition text-white bg-green-500 border-green-800 hover:bg-green-600 active:bg-green-700 focus:ring-green-300" type="submit">Login</button>
                            <button className="md:w-auto md:ml-0 ml-2 w-full mt-5 px-4 py-2 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition text-white bg-green-500 border-green-800 hover:bg-green-600 active:bg-green-700 focus:ring-green-300" type="submit">Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="mt-auto">
                <div className="w-full flex flex-row justify-center items-center py-3">
                    <div className="text-center">
                        <p className="text-gray-500 hover:text-gray-400 cursor-pointer transition-all text-opacity-50">{new Date().getFullYear()} © {process.env.NEXT_PUBLIC_APP_NAME} yNotes - All directs reserved</p>
                        <p className="text-center  flex items-center justify-center">
                            <a href="https://github.com/gs-nasc" target="_blank">
                                <svg width="24" height="24" fill="currentColor" className="text-gray-500 hover:text-gray-400 text-opacity-50 mx-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path></svg>
                            </a>
                            <a href="https://github.com/gs-nasc/note-website" target="_blank">
                                <CodeIcon className="h-5 w-5 text-gray-500 text-opacity-50 mx-1 hover:text-gray-400" />
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Login
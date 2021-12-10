import axios from 'axios';
import config from '../config.json';

const Auth = {
    login: (email: string, password: string): Promise<{ status: boolean, message: string }> => {
        return new Promise((resolve) => {
            console.log(config.apiUrl + '/api/v1/login');
            axios.post(config.apiUrl + '/api/v1/login', { email, password }).then(response => {
                if (response.status === 200) {
                    resolve({
                            status: true,
                            message: response.data.token
                        });
                } else {
                    resolve({
                        status: false,
                        message: response.data.errors[0].message
                    });
                }
            }).catch(error => {
                console.log(error);
                resolve({
                    status: false,
                    message: error
                });
            });
        });
    },
    register: (email: string, password: string): Promise<{ status: boolean, message: string }> => {
        return new Promise((resolve) => {
            axios.post(config.apiUrl + '/api/v1/register', { email, password }).then(response => {
                if (response.status === 200) {
                    resolve({
                        status: true,
                        message: response.data.token
                    });
                } else {
                    resolve({
                        status: false,
                        message: response.data.errors[0].message
                    });
                }
            }).catch(error => {
                console.log(error);
                resolve({
                    status: false,
                    message: error
                });
            });
        });
    }
}

export default Auth;
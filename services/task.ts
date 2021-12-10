import axios from 'axios';
import config from '../config.json';

const Task = {
    getAll: (): Promise<{ status: boolean, message: string }> => {
        return new Promise((resolve) => {
            if (localStorage.getItem('token') === null) {
                resolve({ status: false, message: 'No token found' });
            } else {
                const path = "/api/v1/tasks";
                axios.get(config.apiUrl + path, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        resolve({ status: true, message: response.data });
                    } else {
                        resolve({ status: false, message: response.data.errors.message });
                    }
                }).catch((error) => {
                    resolve({ status: false, message: error });
                });
            }
        });
    },
    getById: (id: number): Promise<{ status: boolean, message: string }> => {
        return new Promise((resolve) => {
            if (localStorage.getItem('token') === null) {
                resolve({ status: false, message: 'No token found' });
            } else {
                const path = "/api/v1/tasks/" + id;
                axios.get(config.apiUrl + path, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        resolve({ status: true, message: response.data });
                    } else {
                        resolve({ status: false, message: response.data.errors.message });
                    }
                }).catch((error) => {
                    resolve({ status: false, message: error });
                });
            }
        });
    },
    create(title: string, description: string, color: string): Promise<{ status: boolean, message: string }> {
        return new Promise((resolve) => {
            if (localStorage.getItem('token') === null) {
                resolve({ status: false, message: 'No token found' });
            } else {
                const path = "/api/v1/tasks";
                axios.post(config.apiUrl + path, {
                    title,
                    description,
                    color
                }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        resolve({ status: true, message: response.data });
                    } else {
                        resolve({ status: false, message: response.data.errors.message });
                    }
                }).catch((error) => {
                    resolve({ status: false, message: error });
                });
            }
        });
    },
    update(id: number, title: string, description: string, color: string, completed: boolean): Promise<{ status: boolean, message: string }> {
        return new Promise((resolve) => {
            if (localStorage.getItem('token') === null) {
                resolve({ status: false, message: 'No token found' });
            } else {
                const path = "/api/v1/tasks/" + id;
                axios.put(config.apiUrl + path, {
                    title,
                    description,
                    color,
                    completed
                }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        resolve({ status: true, message: response.data });
                    } else {
                        resolve({ status: false, message: response.data.errors.message });
                    }
                }).catch((error) => {
                    resolve({ status: false, message: error });
                });
            }
        });
    },
    delete(id: number): Promise<{ status: boolean, message: string }> {
        return new Promise((resolve) => {
            if (localStorage.getItem('token') === null) {
                resolve({ status: false, message: 'No token found' });
            } else {
                const path = "/api/v1/tasks/" + id;
                axios.delete(config.apiUrl + path, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        resolve({ status: true, message: response.data });
                    } else {
                        resolve({ status: false, message: response.data.errors.message });
                    }
                }).catch((error) => {
                    resolve({ status: false, message: error });
                });
            }
        });
    },
}

export default Task;
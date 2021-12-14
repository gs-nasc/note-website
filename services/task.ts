import axios from 'axios';
import config from '../config.json';
import Task from '../models/task';

/**
 * @class Task
 */
const TaskService = {
    /**
     * @description Get all tasks
     * @returns {Promise<{status: boolean, message: string}}
     */
    getAll: (): Promise<{status: boolean, message: Array<Task>}> => {
        return new Promise((resolve) => {
            if (localStorage.getItem('token') === null) {
                alert('You are not logged in');
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
                        alert(response.data.errors.message);
                    }
                }).catch((error) => {
                    alert(error);
                });
            }
        });
    },
    /**
     * @description Get task by id
     * @param id User id
     * @returns {Promise<{status: boolean, message: string}>}
     */
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
    /**
     * @description Create new task
     * @param {string} title Task title
     * @param {string} description Task description
     * @param {string} color Task color
     * @return {Promise<{ status: boolean, message: string }>} 
     */
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
    /**
     * @description Update task
     * @param id Task id
     * @param title Task title
     * @param description Task description
     * @param color Task color
     * @param completed Task completed
     * @returns {Promise<{status: boolean, message: string}>}
     */
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
    /**
     * @description Delete task
     * @param id Task id
     * @returns {Promise<{status: boolean, message: string}>}
     */
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

export default TaskService;
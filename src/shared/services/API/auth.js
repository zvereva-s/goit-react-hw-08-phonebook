import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});
const setToken = (token = '') => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = '';
}


export async function signup(data) {
    const { data: result } = await instance.post('/users/signup', data);
    setToken(result.token);
    return result;
}

export async function login(data) {
    const { data: result } = await instance.post('/users/login', data);
    setToken(result.token);
    return result;
}

export async function logout() {
    const { data: result } = await instance.post('/users/logout');
    setToken('');
    return result;
}

export async function getCurrent(token) {
    try {
        setToken(token);
        const { data: result } = await instance.get('/users/current');
        return result;
    }
    catch (error) {
        setToken('');
        throw error;
    }
    
}

export default instance;
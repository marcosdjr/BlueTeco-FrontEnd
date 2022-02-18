import axios from "axios";


axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

const USER_TOKEN = localStorage.getItem("token");
const AuthStr = "Bearer ".concat(USER_TOKEN);

export const getTableById = async (id) => {
    const response = await axios({
        method: 'get',
        url: `/table/${id}`,
        headers: { Authorization: AuthStr},
    });
    return response;
}
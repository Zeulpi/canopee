import axios from "axios";
import { jwtDecode } from "jwt-decode";


function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

function authenticate(credentials) {
    return axios
        .post("http://localhost:8000/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            window.localStorage.setItem("authToken", token);
            setAxiosToken(token);
            console.log(axios.defaults.headers["Authorization"]);
        return true;
    });
}

function setAxiosToken (token){
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

function setup() {
    const token = window.localStorage.getItem("authToken");
    if (token) {
        const jwtData = jwtDecode(token);
        if (jwtData.exp * 1000 > new Date().getTime()) {
            setAxiosToken();
        }
        else{
            logout();
        }
        console.log(jwtData);
    }
    else{
        logout();
    }
}

export default {
    authenticate,
    logout,
    setup
}
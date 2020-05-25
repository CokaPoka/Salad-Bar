import axios from "axios";
const BASE_URL = "https://saladbarserver.herokuapp.com";

const registerUser = async (name, surname, username, password, email) => {
    return await axios.post(`${BASE_URL}/users/register`, {
        "name":name,
        "surname": surname,
        "username": username,
        "password":password,
        "email":email
    });
};

const loginUser = async (username, password) => {
    return await axios.post(`${BASE_URL}/users/login`, { username, password });
};

const getIngredient = () => {
    return axios.get(`${BASE_URL}/ingredients`)
}

const setIngredient = (name, avatar, tag, calories) => {
    return axios.post(`${BASE_URL}/ingredients`, { "name": name, "avatar": avatar, "tag": tag, "calories": calories })
}

const deleteIngredient = (id) => {
    return axios.delete(`${BASE_URL}/ingredients/${id}`)
}

const getSalad = () => {
    return axios.get(`${BASE_URL}/salads`)
}

const setSalad = (name, ingredients, desc, totalcalories) => {
    return axios.post(`${BASE_URL}/salads`, { "name": name, "ingredients": ingredients, "desc": desc, "totalcalories": totalcalories })
}

const deleteSalad = (id) => {
    return axios.delete(`${BASE_URL}/salads/${id}`)
}


export { registerUser, loginUser, getIngredient, setIngredient, deleteIngredient, getSalad, setSalad, deleteSalad};
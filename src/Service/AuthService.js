let state = {
    token: null,
};

const deleteToken = () => {
    return new Promise(resolve => {
        state.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        resolve();
    });
};

const setToken = token => {
    state.token = token;
    localStorage.setItem("token", token);
};

const isLogin = () => {
    // return true;
    return state.token || localStorage.getItem("token");
};


export { setToken, isLogin, deleteToken };
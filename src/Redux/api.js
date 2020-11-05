export default {
    register: {
        path: "/api/v1/user/registerUser",
        method: "POST",
        noAuth: true,
    },
    changepassword: {
        path: "/api/v1/user/change-password",
        method: "PUT",
        noAuth: false,
    },

    login: {
        path: "/api/v1/user/loginUser",
        method: "POST",
        noAuth: true,
    },

    currentUser: {
        path: "/api/v1/user/getUser",
        method: "GET",
        noAuth: false,
    },
};

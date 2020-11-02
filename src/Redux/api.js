export default {
    register: {
        path: "/api/v1/auth/register",
        method: "POST",
        noAuth: true,
    },
    changepassword: {
        path: "/api/v1/auth/change-password",
        method: "PUT",
        noAuth: false,
    },

    login: {
        path: "/api/v1",
        method: "POST",
        noAuth: true,
    },

    currentUser: {
        path: "/api/v1/auth/user",
        method: "GET",
        noAuth: false,
    },
};

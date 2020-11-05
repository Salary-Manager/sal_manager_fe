import { fireRequest } from "./fireRequest";

export const postRegister = (form) => {
    return fireRequest("register", [], form);
};
export const postLogin = (form) => {
    return fireRequest("login", [], form);
};

export const changePassword = (form) => {
    return fireRequest("changepassword", [], form);
};

export const getCurrentUser = () => {
    return fireRequest("currentUser");
};

export const sendEmail = (form) => {
    return fireRequest("sendEmail", [], form);
};
export const resetPassword = (form) => {
    return fireRequest("resetPassword", [], form);
};

export const getRequestList = (params) => {
    return fireRequest("getRequestList", [params]);
};

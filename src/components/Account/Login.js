import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../Redux/actions";
import { navigate, A, useQueryParams } from "hookrouter";
import * as Notficiation from "../../util/Notifications";

export default function Login() {
    // create our ref
    const myInput = useRef();
    const dispatch = useDispatch();
    const [formLoading, setFormLoading] = useState(false);
    const [formError, setFormError] = useState(false);
    const [queryParams, setQueryParams] = useQueryParams();

    const initForm = {
        userId: "",
        password: "",
    };
    const [form, setForm] = useState(initForm);

    useEffect(() => {
        myInput.current && myInput.current.focus();
        setQueryParams(queryParams);
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;
        const fieldValue = { ...form };

        // error handling needed
        fieldValue[name] = value;

        setForm(fieldValue);
    };

    function validateInputs() {
        let err = "";
        let formValid = true;
        if (form.userId === "" || form.password === "") {
            err = "Admission no. / Password is empty";
            formValid = false;
        }
        setFormError(err);
        return formValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // error handling required
        const valid = validateInputs();
        if (valid && !formLoading) {
            setFormLoading(true);

            dispatch(postLogin(form))
                .then((resp) => {
                    const { data: res } = resp;
                    const { status: statusCode } = resp;

                    // set captha logic needed

                    // TODO: change status code to 200 (backend was sending 201 on login)
                    if (res && statusCode === 201) {
                        localStorage.setItem(
                            "login_access_token",
                            res.access_token
                        );
                        if (queryParams && queryParams.redirect) {
                            navigate(queryParams.redirect);
                        }
                        // window.location.reload();
                    } else {
                        setFormError("Check your userId and password");
                        setFormLoading(false);
                    }
                })
                .catch((err) => {
                    Notficiation.Error({
                        msg: "Check network connection and try again",
                    });
                });
        }
    };

    return (
        <div className="flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div>
                    <h2 className="lg:mt-6 md:mt-6 sm:mt-2 text-center lg:text-3xl text-xl leading-9 font-bold text-gray-800 uppercase">
                        Sign in to continue
                    </h2>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow rounded px-8 pt-6 pb-8 my-5">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="userId">
                            Admission No.
                        </label>
                        <input
                            ref={myInput}
                            aria-label="Admission No."
                            name="userId"
                            type="text"
                            value={form.userId}
                            onChange={handleChange}
                            className={`appearance-none border ${
                                formError ? "border-red-500" : ""
                            } rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                            placeholder="Admission No."
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            aria-label="Password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className={`appearance-none border ${
                                formError ? "border-red-500" : ""
                            } rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                            placeholder="******************"
                        />
                    </div>
                    <div className="h-10">
                        <p className="text-red-500 text-xs italic bold">
                            {formError}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className={`flex items-center ${
                                formLoading
                                    ? "bg-gray-600"
                                    : "bg-red-700 hover:bg-red-800"
                            } text-white font-bold py-2 px-4 sm:px-3 rounded focus:outline-none focus:shadow-outline`}>
                            <svg
                                className={`h-5 w-5 ${
                                    formLoading
                                        ? "text-gray-400"
                                        : "text-red-600"
                                } transition ease-in-out duration-150 mr-1`}
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Sign In
                        </button>
                        <div className="flex flex-col ml-1  ">
                            {/* <A
                                className="inline-block align-baseline font-bold text-sm text-red-700 hover:text-red-800 my-1"
                                href="/facilitator-register">
                                Register as Hotel Owner
                            </A> */}
                            <A
                                className="inline-block align-baseline font-bold text-sm text-red-700 hover:text-red-800"
                                href="/forgot-password">
                                Forgot Password?
                            </A>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

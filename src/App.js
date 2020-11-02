import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_TYPES } from "./Common/constants";
import { FullLoading } from "./components/common/Loader";
import { getCurrentUser } from "./Redux/actions";
import AppRouter from "./Router/AppRouter";
import PublicRouter from "./Router/PublicRouter";
import { useAbortableEffect } from "./util/useAbortableEffect";

function App() {
    const dispatch = useDispatch();
    const state = useSelector((reduxState) => reduxState);
    const { currentUser } = state;
    const [user, setUser] = useState(false);

    useAbortableEffect(
        async (status) => {
            const access = localStorage.getItem("login_access_token");
            if (access) {
                const res = await dispatch(getCurrentUser());
                if (!status.aborted && res && res.statusCode === 200) {
                    setUser(res.data);
                }
            } else {
                setUser(null);
            }
        },
        [dispatch]
    );

    // keep isLoading in redux, so that if any component is loading
    // App component will render loading page
    // This can be kept within AppRouter as well incase navbar needs
    // to be kept on UI
    if (user !== null && (!currentUser || currentUser.isFetching)) {
        return <FullLoading />;
    }

    if (currentUser && currentUser.data) {
        // console.log("user:", currentUser.data.data.type);
        if (currentUser.data.data.type === USER_TYPES.HOD.type) {
            return <AppRouter />;
        }
    } else {
        return <PublicRouter />;
    }
}

export default App;

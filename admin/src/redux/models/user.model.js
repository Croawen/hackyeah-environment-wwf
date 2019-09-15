import produce from "immer";
import {
    clearCurrentUserLS,
    getCurrentUserLS,
    setCurrentUserLS
} from "@common/utils/localStorage/localStorage";
import { logInUser } from "@user/user.api";
import history from "../history";

export const currentUserModel = {
    state: {
        currentUser: getCurrentUserLS()
    },

    reducers: {
        setCurrentUser(state, payload) {
            return produce(state, draft => {
                draft.currentUser = payload;
            });
        },

        clearUser(state, payload) {
            return produce(state, draft => {
                draft.currentUser = null;
            });
        }
    },

    effects: dispatch => ({
        async logIn({ login, password }) {
            const res = await logInUser({ login, password });
            setCurrentUserLS(res);
        },

        logOut() {
            clearCurrentUserLS();
            this.clearUser();
            return history.push("/login");
        }
    })
};

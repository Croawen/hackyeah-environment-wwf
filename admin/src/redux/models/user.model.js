import produce from "immer";
import {
  clearCurrentUserLS,
  getCurrentUserLS
} from "@common/utils/localStorage/localStorage";
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
      setCurrentUserLS({});
    },

    logOut() {
      clearCurrentUserLS();
      this.clearUser();
      return history.push("/login");
    }
  })
};

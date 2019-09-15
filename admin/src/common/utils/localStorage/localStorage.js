export const CURRENT_USER = "CURRENT_USER";

export const setCurrentUserLS = user => {
    localStorage.setItem(CURRENT_USER, JSON.stringify(user));
};

export const getCurrentUserLS = () => {
    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
    return currentUser ? currentUser : null;
};

export const clearCurrentUserLS = () => {
    localStorage.removeItem(CURRENT_USER);
};

export const setCurrentAccessToken = (tokenInfo) => {
    const currentData = getCurrentUserLS();
    if (!currentData) return;

    currentData.token = tokenInfo;
    localStorage.setItem(CURRENT_USER, JSON.stringify(currentData));
};
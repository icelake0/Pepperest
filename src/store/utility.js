export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const setStateInLocalStorage = (key, value) => {
    localStorage.setItem(key, value && btoa(value));
};

export const getStateFromLocalStorage = (key) => {
    const value = localStorage.getItem(key)
    return value && atob(value);
};

export const removeStateFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

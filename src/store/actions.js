export const onSearch = (name) => ({
    type: "ON_SEARCH",
    payload: name
})

export const onClickCard = (id) => ({
    type: "ON_CLICK_CARD",
    payload: id
})

export const onCurrSuccess = (data) => ({
    type: "ON_CURR_SUCCESS",
    payload: data
})

export const onError = (err) => ({
    type: "ON_ERROR",
    payload: err
})

export const onCurrError = (err) => ({
    type: "ON_CURR_ERROR",
    payload: err
})

export const logout = () => ({
    type: "LOGOUT",
    payload: null
})
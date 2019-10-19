const initialState = {
    studentName: "",
    id: null,
    curr: null,

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ON_SEARCH":
            return Object.assign({}, state, { studentName: action.payload })
        case "ON_CLICK_CARD":
            return Object.assign({}, state, { id: action.payload })
        case "LOGOUT":
            return Object.assign({}, state, { data: null, curr: null, inProgress: false })
        default:
            return state;
    }
}

export default reducer;
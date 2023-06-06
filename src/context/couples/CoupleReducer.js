
const coupleReducer = (state, action) => {

    switch(action.type) {
        case 'GET_COUPLES':
            return {
                ...state,
                couples: action.payload,
                loading: false,
            }
        case 'GET_COUPLE' :
            return {
                ...state,
                couple: action.payload,
                loading: false
            }
        case 'GET_ALBUM' :
            return {
                ...state,
                album: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default coupleReducer
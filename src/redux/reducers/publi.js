import { GET_DATA_PUBLI, SET_DATA_PUBLI, ERROR_DATA_PUBLI } from '../actions/types'

const initialUIState = {
    isLoading: false,
    data: [],
    error: null
}

export default (state = initialUIState, action = {}) => {
    switch (action.type) {

        case GET_DATA_PUBLI:
            return {
                ...state,
                isLoading: true,
            }

        case SET_DATA_PUBLI:
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.item]
            }

        case ERROR_DATA_PUBLI:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}

import { GET_DATA_BLOG, SET_DATA_BLOG, ERROR_DATA_BLOG } from '../actions/types'

const initialUIState = {
    isLoading: false,
    data: [],
    error: null
}

export default (state = initialUIState, action = {}) => {
    switch (action.type) {

        case GET_DATA_BLOG:
            return {
                ...state,
                isLoading: true,
            }

        case SET_DATA_BLOG:
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.item]
            }

        case ERROR_DATA_BLOG:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}

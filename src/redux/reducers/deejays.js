import { GET_DATA_DJS, SET_DATA_DJS, ERROR_DATA_DJS } from '../actions/types'

const initialUIState = {
    isLoading: false,
    data: [],
    error: null
}

export default (state = initialUIState, action = {}) => {
    switch (action.type) {

        case GET_DATA_DJS:
            return {
                ...state,
                isLoading: true,
            }

        case SET_DATA_DJS:
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.item]
            }

        case ERROR_DATA_DJS:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}

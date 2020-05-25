import { REQUEST_START, REQUEST_END, REQUEST_FAIL } from '../actions/types'
import constants from '../../utils/constants'

const initialUIState = {
    isLoading: false,
    requests: {}
}

export default (state = initialUIState, action = {}) => {
    switch (action.type) {

        case REQUEST_START:
            return {
                ...state,
                isLoading: true,
                requests: {
                    ...state.requests,
                    [action.requestType]: constants.REQUEST_STATUS_PENDING
                }
            }

        case REQUEST_END:
            return {
                ...state,
                isLoading: false,
                requests: {
                    ...state.requests,
                    [action.requestType]: constants.REQUEST_STATUS_SUCCESS
                }
            }

        case REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                requests: {
                    ...state.requests,
                    [action.requestType]: constants.REQUEST_STATUS_FAIL
                }
            }

        default:
            return state
    }
}

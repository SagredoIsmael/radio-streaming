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
            const publi = {
                image: { uri: action.item.photo },
                title: action.item.title ? action.item.title : '',
                imageWidth: '100%',
                imageHeight: '100%',
                subtitle: action.item.subTitle ? action.item.subTitle : '',
                titleColor: action.item.titleColor ? action.item.titleColor : '#fff',
                subtitleColor: action.item.subTitleColor ? action.item.subTitleColor : '#fff'
            }
            return {
                ...state,
                isLoading: false,
                data: [...state.data, publi]
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

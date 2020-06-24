import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getDeejays = get('deejays')

export const getData = pipe(
    getDeejays,
    get('data')
)

export const getError = pipe(
    getDeejays,
    get('error')
)

export const isLoading = pipe(
    getDeejays,
    get('isLoading')
)


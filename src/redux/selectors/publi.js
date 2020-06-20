import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getPublicity = get('publi')

export const getPubli = pipe(
    getPublicity,
    get('data')
)

export const getPubliError = pipe(
    getPublicity,
    get('error')
)

export const isPubliLoading = pipe(
    getPublicity,
    get('isLoading')
)
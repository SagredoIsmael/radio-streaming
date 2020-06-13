import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getBlog = get('blog')

export const getData = pipe(
    getBlog,
    get('data')
)

export const getError = pipe(
    getBlog,
    get('error')
)

export const isLoading = pipe(
    getBlog,
    get('isLoading')
)


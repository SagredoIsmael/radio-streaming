import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getBlog = get('blog')

export const getBlogs = pipe(
    getBlog,
    get('data')
)

export const getBlogError = pipe(
    getBlog,
    get('error')
)

export const isBlogLoading = pipe(
    getBlog,
    get('isLoading')
)


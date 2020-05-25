import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getUser = get('user')

export const getUserToken = pipe(
    getUser,
    get('token')
)

export const getUsername = pipe(
    getUser,
    get('username')
)

export const getPassword = pipe(
    getUser,
    get('password')
)

export const getUserError = pipe(
    getUser,
    get('error')
)

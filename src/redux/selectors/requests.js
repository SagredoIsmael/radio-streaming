import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getRequests = get('requests')

export const getIsRequestLoading = pipe(
    getRequests,
    get('isLoading')
)

import * as constants from './constants'
export const createNotificationAction = data=> ({
    type: constants.NOTIFICATION,
    data
})
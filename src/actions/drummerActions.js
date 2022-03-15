import * as types from './types'

export const increaseScore = (data, callback = () => {}) => {
  return async dispatch => {
    try {
      dispatch({
        type: types.INCREASE_SCORE,
        payload: data
      })
      callback()
    } catch (error) {
      console.log(error)
    }
  }
}

export const resetScore = (callback = () => {}) => {
  return async dispatch => {
    try {
      dispatch({
        type: types.RESET_SCORE
      })
      callback()
    } catch (error) {
      console.log(error)
    }
  }
}

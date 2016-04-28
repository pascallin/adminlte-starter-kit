import * as types from '../actions-types'

export function onIncrement() {
  return { type: types.INCREMENT }
}

export function onDecrement() {
  return { type: types.DECREMENT }
}

export function appStartAsync(){
  return dispatch => {
    setTimeout(()=>{
      dispatch({type:types.APP_START})
    },2000)
  }
}

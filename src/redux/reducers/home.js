import * as types from '../actions-types'

const initialState = "loading...";

export default function appSatrt(state = initialState, action) {
  switch (action.type) {
    case types.APP_START:
      return "this is a react app";
    default:
      return state
  }
}

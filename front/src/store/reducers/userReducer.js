const initialState = {
  isLogged: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "USER_SIGNUP":
    return { ...state, ...payload }

  default:
    return state
  }
}

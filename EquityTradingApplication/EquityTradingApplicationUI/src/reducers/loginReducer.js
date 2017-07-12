export default function loginReducer(state={
    isValid :false,
    error: null,
  }, action) {

    switch (action.type) {
      case "LOGIN_FAILED": {
        return Object.assign({},state, {error: action.payload});
      }
      }
    return state
}
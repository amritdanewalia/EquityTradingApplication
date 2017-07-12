export default function userReducer(state={user:{}
  }, action) {

    switch (action.type) {
      case "FETCH_USER_SUCCESS": {
        return Object.assign({},state,{user:action.payload});
      }
      }
    return state
}
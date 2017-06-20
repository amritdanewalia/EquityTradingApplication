export default function userReducer(state={user:{}
  }, action) {

    switch (action.type) {
      case "FETCH_USER_SUCCESS": {
      	console.log("yo"+action.payload.name);
      	var x =Object.assign({},state,{user:action.payload})
      	console.log("x"+x.user.name)
        return Object.assign({},state,{user:action.payload});
      }
      }
    return state
}
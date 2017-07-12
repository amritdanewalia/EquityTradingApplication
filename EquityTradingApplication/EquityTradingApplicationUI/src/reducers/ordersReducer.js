export default function ordersReducer(state={orders:[]}, action) {

    switch (action.type) {
      case "FETCH_ORDERS_SUCCESS": {
        return Object.assign({},state, {orders: action.payload});
      }
      }
    return state
}
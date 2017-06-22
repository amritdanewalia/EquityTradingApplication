export default function ordersReducer(state={orders:[]}, action) {

    switch (action.type) {
      case "FETCH_ORDERS_SUCCESS": {
        return Object.assign({},state, {equities: JSON.parse(action.payload)});
      }
      }
    return state
}
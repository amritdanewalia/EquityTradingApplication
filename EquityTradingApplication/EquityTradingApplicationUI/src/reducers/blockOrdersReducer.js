export default function blockOrdersReducer(state={blockOrders:[]}, action) {

    switch (action.type) {
      case "FETCH_BLOCK_ORDERS_SUCCESS": {
      console.log(action.payload);
        return Object.assign({},state, {blockOrders: action.payload});
      }
      }
    return state
}
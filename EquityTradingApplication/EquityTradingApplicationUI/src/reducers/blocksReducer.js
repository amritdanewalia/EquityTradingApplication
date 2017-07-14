export default function blocksReducer(state={blocks:[]}, action) {

    switch (action.type) {
      case "FETCH_BLOCKS_SUCCESS": {
      console.log("blocks "+action.payload);
        return Object.assign({},state, {blocks: action.payload});
      }
      }
    return state
}
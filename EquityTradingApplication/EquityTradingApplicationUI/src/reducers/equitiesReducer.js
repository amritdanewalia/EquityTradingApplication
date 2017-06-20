export default function reducer(state={equities:[]}, action) {

    switch (action.type) {
      case "FETCH_EQUITIES_SUCCESS": {
        return Object.assign({},state, {equities: JSON.parse(action.payload)});
      }
      }
    return state
}
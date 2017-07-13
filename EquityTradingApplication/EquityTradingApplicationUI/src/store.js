import { applyMiddleware, createStore, combineReducers } from "redux"

import thunk from "redux-thunk"
import { createLogger } from 'redux-logger'

import reducer from "./reducers/loginReducer"
import userReducer from "./reducers/userReducer"
import equitiesReducer from "./reducers/equitiesReducer"
import ordersReducer from "./reducers/ordersReducer"
import blockOrdersReducer from "./reducers/blockOrdersReducer"

const middleware = applyMiddleware(thunk)
const reducers =combineReducers({login:reducer,user:userReducer,equities:equitiesReducer, orders:ordersReducer, blockOrders:blockOrdersReducer})
export default createStore(reducers, middleware)
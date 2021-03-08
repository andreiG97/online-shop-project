import { combineReducers, createStore, applyMiddleware } from "redux";
import { cartReducer } from "./reducers/cart";
import { userReducer } from "./reducers/user";
import {favouriteReducer} from "./reducers/favourites"
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    favourites: favouriteReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store)

export default store;
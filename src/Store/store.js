import {applyMiddleware, compose, createStore} from "redux"
import {rootReducer} from "../reducers/rootReducer"
import thunk from "redux-thunk"


const composeEnhancers =
   (window && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const Store = createStore(rootReducer, compose(
   applyMiddleware(thunk),
   composeEnhancers && composeEnhancers()
))

export default Store;


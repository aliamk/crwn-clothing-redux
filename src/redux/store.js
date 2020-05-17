import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

const middlewares = [ logger ]

/* All the values in the 'logger' array will be
spread into '...middlewares' as individual arguments */
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
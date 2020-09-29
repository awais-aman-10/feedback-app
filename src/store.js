import { applyMiddleware, createStore }   from 'redux'
import rootReducer                        from './reducers/index.js'
import thunk                              from 'redux-thunk'
import { persistStore, persistReducer }   from 'redux-persist'
import storage                            from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage,
}

let middlewares = [thunk]
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store     = createStore(persistedReducer, applyMiddleware(...middlewares))
  let persistor = persistStore(store)
  return { store, persistor }
}

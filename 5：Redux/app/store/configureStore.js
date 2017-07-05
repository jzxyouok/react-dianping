//第二步：根据规则生成store
import { createStore } from 'redux'
import rootReducer from '../reducers/index.js' //总的规则(多个规则)

export default function configureStore(initialState){ //initialState为reducer里面initialState
  const store = createStore(rootReducer,initialState,
  	// 触发 redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}
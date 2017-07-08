//第二步：根据规则生成store
import { createStore } from 'redux'
import rootReducer from '../reducers/index.js'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}
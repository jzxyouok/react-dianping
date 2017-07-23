// Redux store 存放状态，接收reducer处理后的状态
import {createStore} from 'redux'
import rootReducer from '../reducers/index.js'

export default function configureStore(initialState){
	const store = createStore(rootReducer,initialState,
		// 触发 redux-devtools
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}
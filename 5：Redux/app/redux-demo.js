import { createStore } from 'redux'

export default function(){
  // 下面这一段代码，就是 https://github.com/reactjs/redux 中的入门demo

  //第一步：定义计算规则，即 reducer
  function counter(state = 0, action){
    switch(action.type){
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  //第二步：根据规则生成store
  let store = createStore(counter)

  //第三步：定义数据(stete)变化之后的处理
  store.subscribe(() => {
    console.log('current state', store.getState())
  })

  //第四步：触发数据变化 => 这里触发了三次，会有三次console
  store.dispatch({type: 'INCREMENT'})
  store.dispatch({type: 'INCREMENT'})
  store.dispatch({type: 'DECREMENT'})
}

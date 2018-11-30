export default {
  //如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
  namespaced: true,
  state: {
    count: 0,
    name: 'wgh',
    todos: [{
        id: 1,
        text: '我是王光辉',
        done: true
      },
      {
        id: 2,
        text: '今年24岁了',
        done: false
      }
    ]
  },
  mutations: {
    //store.commit 传入额外的参数，即 mutation 的 载荷（payload），大多数情况下payload应该是一个对象，这样可以包含多个字段并且记录mutation会更加易读
    // increment: (state, payload) => state.count += payload.amount,
    // decrement: (state, payload) => state.count -= payload.amount,
    increment(state,payload){
        state.count += payload.amount;
    },
    decrement(state,payload){
        state.count -= payload.amount
    }
    // [SOME_MUTATION] (state) {
    //     // mutate state
    //   }
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    },
   /*  getToDoById:function(state){
            return function(id){
                return state.todos.find(function (todo) {
                    return todo.id===id
                  })
            }
    }, */
    //注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的,
  // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
    doneToDos: state => {
      return state.todos.filter(todo => todo.done);
    }
  },
   //action提交的是mutation，而不是直接改变的状态
  //action可以包含任意的异步操作。
  actions: {
    increment(context) {
      context.commit('increment');
    },
    incrementAsync({
      commit
    }) {
      setTimeout(() => {
        commit(increment)
      }, 1000)
    }
  }
}

<template>
  <div class="page">
    <div>{{count}}</div>
    <div>{{name}}</div>
    <button @click="add">+</button>
    <button @click="del">-</button>
    <div>你还有{{things}}没做</div>
  </div>
</template>
   
<script>
// 当一个组件中需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余为解决这个问题，我们可以使用mapStat辅助函数帮助我们生成计算属性
import { mapState,mapGetters,mapMutations  } from "vuex";
export default {
  data() {
    return {};
  },
  //如何在vue的组件中显示state的状态呢，首先由于Vuex的状态存储是响应式的，从store实例中读取状态最简单的方法就是在计算属性中返回某个状态
  //   computed:mapState({
  //       count: state => state.count,
  //       name: state => state.name
  //     //这里我们也可以传递字符串参数 'count' 等同于 state=>state.count
  //     //这里我们也可以传递字符串参数 'name' 等同于 state=>state.name
  //   }) ,
  computed:{
    // mapState函数的返回值是一个对象，在这里使用对象的展开运算符，将其混入到外部对象中。
      ...mapState('studyCenterIndex',{
          count: state => state.count,
          name: state => state.name,
      }),
       //映射getters
      ...mapGetters('studyCenterIndex',{
          doneCount:'doneToDos'
      }),
      things(){
          return this.doneCount.length;
      },
     
  },
  methods: {
      ...mapMutations('studyCenterIndex',['increment','decrement']),
    //  任何由increment导致的状态变化都应在此刻完成，意思是必须是同步的。
    add() {
        this.increment({amount:3})//将`this.increment`映射为`this.$store.commit(amount)`
    },
    del() {
      this.decrement({amount:2});
    }
  },
  components: {}
};
</script>

<style>
</style>

<template>
      <iLayout></iLayout>
</template>

<script>
// 1.在全局导入顶部组件
import iLayout from './views/Layout'
export default {
  //2. 注册组件
  components:{iLayout},
  name: 'App'
}
</script>

<style>

.router-link-active{
   background-color: #fc3a6f;
}
</style>

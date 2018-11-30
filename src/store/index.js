import Vue from 'vue';
import Vuex from 'vuex';
// 这里我们将store分隔成模块。每个模块拥有自己的state、mutations、getters、actions
import help from './module/help'
import layout from './module/layout'
import myAc from './module/myAc'
import myCourse from './module/myCourse'
import myExam from './module/myExam'
import myNote from './module/myNote'
import questionBank from './module/questionBank'
import studyCenterIndex from './module/studyCenterIndex'
import studyReport from './module/studyReport'
import {SOME_MUTAIONS} from './mutation-type'
Vue.use(Vuex);
//每一个Vue应用的核心就是store（仓库），它包含了你应用当中大部分的state（状态）Vuex和全局状态的有以下两点不同，
/* 
1. Vuex的状态存储是响应式。当Vue组件从store中读取状态的时候，若stroe中的状态发生变化，那么响应的组件也会的到响应的更新。
2. 你不能直接改变store中的状态，改变store中的状态的唯一方式就是显示的提交(commit) mutation
*/
/* Vuex使用的是单一状态树，用一个对象就包含了全部的应用层级状态，至此它将作为唯一的数据源ssot存在 */

// 由于使用单一状态树，应用的所有状态都会集中到一个比较大的对象当应用变得比较大的时候，store对象可能会变得相当臃肿
export default new Vuex.Store({
    modules:{
        help,
        layout,
        myAc,
        myCourse,
        myExam,
        myNote,
        questionBank,
        studyCenterIndex,
        studyReport
 }
});
//不能直接改变store中的状态，改变store中的状态的唯一方式就是显式的调教commit;


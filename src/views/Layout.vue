<template>
  <div id="app">
    <div class="container">
      <div class="top">
        <!--  顶部左侧 -->
        <div class="top-left">
          <i class="icon icon-logo"></i>
          <a class="link-caicui" href="https://elearning.zbgedu.com" target="_blank"></a>
          <a class="link-studycenter" href="https://elearning.zbgedu.com"></a>
          <!-- 顶部右侧 -->
          <div class="top-right">

          </div>
        </div>
      </div>
      <div class="main">
        <!-- 左侧导航 -->
        <div class="left">
          <ul class="nav">
            <li class="nav-li ">
              <router-link to="/studycenterIndex" class="nav-a" exact>
                <i class="icon icon-home"></i>
                <span class="nav-text">首页</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/courseStudyIn" class="nav-a">
                <i class="icon icon-course"></i>
                <span class="nav-text">我的课程</span>
              </router-link>
            </li>
            <li class="nav-li hidden">
              <router-link to="/studyReport" class="nav-a">
                <i class="icon icon-studyReport"></i>
                <span class="nav-text">学习报告</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/questionBank" class="nav-a">
                <i class="icon icon-questionBank"></i>
                <span class="nav-text">题库</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/myExam" class="nav-a">
                <i class="icon icon-exam"></i>
                <span class="nav-text">做题记录</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/myNote" class="nav-a">
                <i class="icon icon-note"></i>
                <span class="nav-text">我的笔记</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/myAc/foo" class="nav-a">
                <i class="icon icon-ac"></i>
                <span class="nav-text">我的交流</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/help" class="nav-a">
                <i class="icon icon-help"></i>
                <span class="nav-text">学习帮助</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 内容区域 -->
        <div class="right">
          <transition >
            <router-view></router-view>
          </transition>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},
  }

</script>

<style>
@import "../assets/css/icon.css";
@import "../assets/css/reset";
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: white;
}
#app {
    width: 100%;
    height: 100%;
}
html,
body {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    min-width: 900px;
    min-height: 680px;
    overflow: hidden;
}
.container {
    position: relative;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    min-width: 768px;
    padding-top: 56px;
}
.main {
    position: relative;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding-left: 140px;
}
.top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
}

.left {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 140px;
    height: 100%;
    overflow: hidden;
}
.top-left {
    position: relative;
    float: left;
    margin: 13px 0 0 15px;
}
.icon-logo {
    float: left;
    width: 217px;
    height: 35px;
    background: url("../assets/images/logo.png") no-repeat;
    background-size: 100%;
}
.top-left .link-caicui {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 107px;
    height: 35px;
    cursor: pointer;
}
.top-left .link-studycenter {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 107px;
    right: initial;
    width: 120px;
    height: 35px;
    cursor: pointer;
}
.nav {
    width: 140px;
    height: 100%;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 14px;
    background-color: #3e4e63;
}
.nav .nav-a {
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    width: 100%;
    height: 40px;
    line-height: 40px;
}
/* .nav .nav-a:hover {
  background-color: rgba(255, 54, 109, 0.2);
} */
/* .nav .nav-li.active .nav-a {
  background-color: #fc3a6f;
} */
.nav .nav-text {
    margin-left: 20px;
}
.nav i {
    float: left;
    margin: 10px 0 0 20px;
}
.right {
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 10px solid #fc3a6f;
    overflow: hidden;
}

</style>

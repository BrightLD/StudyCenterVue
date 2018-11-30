// import IScroll from 'iscroll/build/iscroll-probe'
import localForage from "localforage"
import cookie from "js-cookie"

localForage.config({
  driver: [localForage.LOCALSTORAGE,
    // 对于localStorage的不足，这里用其他HTML5 API进行规避，什么API呢？是IndexedDB和WebSQL。优先使用IndexedDB存储数据，如果浏览器不支持，使用WebSQL，浏览器再不支持，使用localStorage。
    localForage.INDEXEDDB,
    localForage.WEBSQL
  ],
  name: 'elearning'
});
function install(Vue, opts = {}) {
  Vue.localForage = Vue.prototype.localForage = localForage;
  Vue.cookie = Vue.prototype.cookie = cookie;
  Vue.log = Vue.prototype.log = function (payload){
    if(process.env.NODE_ENV !== 'production'){
      let log = payload;
      if(typeof payload == 'string'){
        try{
          log = JSON.parse(payload);
        }catch(e){
          console.log(log)
          console.log(e);
          return false;
        }
      }
      console.log(log)
    }
  }
  Vue.prototype.dedupe = function(array) {
    // let unique = [...new Set(arr)];
    return Array.from(new Set(array));
  }
  
  Vue.prototype.canvasRound = function(dom,str){
    let canvas = document.getElementById(dom);
    if(canvas && canvas.getContext){
      let width = canvas.width;
      let height = canvas.height;
      let progress = canvas.getAttribute('data-progress');
      if(progress==0){
        progress = 0.01;
      }
      let cxt=canvas.getContext("2d");
      let canvasTimerTotal = 20;
      let canvasNum = 1;

      let canvasTimer = setInterval(function(){
        if(canvasNum>canvasTimerTotal){
          clearInterval(canvasTimer);
        }else{
          cxt.clearRect(0, 0, width, height)
          if(str && str.bg){
            cxt.beginPath();
            cxt.arc(width/2,height/2,(width/2)-1,1.5*Math.PI,100,false);
            if(str && str.bgBorderWidth){
              cxt.lineWidth=str.bgBorderWidth;
            }else{
              cxt.lineWidth=1;
            }
            if(str && str.bgBorderColor){
                cxt.strokeStyle=str.bgBorderColor;
            }else{
                cxt.strokeStyle='#fff';
            }
            cxt.stroke();
          }
          if(progress){


          let endRad = Math.PI*(( ( (progress/canvasTimerTotal)*canvasNum ) /100)*2-0.5);
          //if(endRad && endRad>0){
            cxt.beginPath();
            cxt.arc(width/2,height/2,(width/2)-1,1.5*Math.PI,endRad,false);
            if(str && str.borderWidth){
              cxt.lineWidth=str.borderWidth;
            }else{
              cxt.lineWidth=2;
            }

            if(str && str.borderColor){
                cxt.strokeStyle=str.borderColor;
            }else{
                cxt.strokeStyle='#fff';
            }
            cxt.stroke();
          }
          
          cxt.closePath();
        //}
        }
        canvasNum++;
      },40);
      
    }
  }
  Vue.prototype.$myMethod = function (methodOptions) {
    console.log('myMethod')
  }
}
export default install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
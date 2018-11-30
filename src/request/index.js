define(['jquery', 'common', 'api', 'layer'], function($, Common, api, layer) {
  'user strict';
  return {
    // 获取静态文件
    ajaxStatic: function(payload) {
      var thatServer = api[payload.server];
      $.ajax({
        url: thatServer.staticData,
        // dataType: 'json',
        type: 'get',
        success: function(data) {
          payload.done(data)
        },
        error: function(data) {
          payload.fail(data)
        },
      })
    },
    // 调用接口
    ajax: function(payload) {
      var that = this;
      var requeseData = that.getAjaxData(payload); // 接口数据
      that.request({
        payload: payload,
        requeseData: requeseData,
        done: function(data) {
          that.requestComplete(payload, data);
          that.requestSuccess(payload, data);
        },
        fail: function(data) {
          that.requestComplete(payload, data);
          that.requestFail(payload, data);
        }
      })
    },
    // 获取调用接口数据
    getAjaxData: function(payload) {
      var apiData = api[payload.server]; // 接口数据
      return {
        url: payload.url ? payload.url : this.getRequestUrl(apiData), // 接口请求地址
        type: payload.type ? payload.type : this.getRequestType(apiData.type), // 接口请求类型
        data: payload.data ? payload.data : this.getRequestData(apiData.data) // 接口请求数据
      };
    },
    // 获取接口请求地址
    getRequestUrl: function(apiData) {
      var requestUrl = '';
      var urlHost = '';
      var urlHostAction = '';
      var urlHostApi = '';
      var urlPath = '';
      var nowTime = "?verTT=" + new Date().getTime();
      var isMock = false;
      var envType = parseInt($.cookie('envType')); // 代码运行环境{'正式':0, '测试':1, '开发':2, '模拟':3}
      switch (envType) {
        case 1:
          if (apiData.isMock) {
            isMock = true;
          } else {
            urlHostAction = api.host.actionDemo;
            urlHostApi = api.host.apiDemo;
          }
          break;
        case 2:
          if (apiData.isMock) {
            isMock = true;
          } else {
            urlHostAction = api.host.actionDev;
            urlHostApi = api.host.apiDev;
          }
          break;
        case 3:
          isMock = true;
          break;
        default:
          urlHostAction = api.host.action;
          urlHostApi = api.host.api;
          break;
      }
      if (isMock) {
        requestUrl = apiData.mock;
      } else {
        urlHost = apiData.host ? apiData.host : apiData.apiType == 'node' ? urlHostAction : urlHostApi;
        urlPath = apiData.path ? apiData.path : api.notFindUrl;
        requestUrl = urlHost + urlPath + nowTime;
      }
      return requestUrl;
    },
    // 获取接口请求类型
    getRequestType: function(type) {
      return type ? type : "GET";
    },
    // 获取接口请求数据
    getRequestData: function(data) {
      return data ? data : {};
    },
    // 调用接口
    request: function(payload) {
      $.ajax({
        url: payload.requeseData.url,
        type: payload.requeseData.type,
        data: payload.requeseData.data,
        success: function(data) {
          payload.done(data);
        },
        error: function(data) {
          payload.fail(data);
        }
      })
    },
    // 接口调用成功的回调函数
    requestSuccess: function(payload, data) {
      if (typeof data == "string") {
        try {
          data = JSON.parse(data);
        } catch (e) {
          console.log('data:::' + JSON.stringify(data))
          console.log('errorData:::' + data)
        }
      }
      if (payload.server == "getAppointmentState" || payload.server == "appointClick") {
        payload.done(data)
      }
      if (data.msg == "nologin") {
        // return false;
        window.localStorage.clear();
        $.removeCookie('User', {
          path: '/'
        });
        $.removeCookie('loginInfo', {
          path: '/'
        });
        $.removeCookie('Token', {
          path: '/'
        });

        $.removeCookie('token', {
          path: '/',
          expires: -1
        });

        CAICUI.isNav = true;
        this.ajax({
          'server': 'loginloglist',
          'data': {
            memberid: CAICUI.User.memberId,
            pageNo: 1,
            pageSize: 1
          },
          done: function(data) {
            if (typeof data == "string") {
              data = JSON.parse(data);
            }

            if (data.state == "success") {
              var loginloglist_login_time = data.data[0].loginTime;
              if (loginloglist_login_time > +CAICUI.User.loginTime) {
                layer.msg('Sorry~ 您的账号在其它地方登录', function() {
                  window.location.href = CAICUI.Common.loginLink;
                });
              } else {
                window.location.href = CAICUI.Common.loginLink;
                // 您已经很长时间没有操作，为了您的账号安全，请重新登录。
                // layer.msg('Sorry~ ', function() {
                //  window.location.href = CAICUI.Common.loginLink;
                // });
              }
            } else {
              window.location.href = CAICUI.Common.loginLink;
              // 您已经很长时间没有操作，为了您的账号安全，请重新登录。
              // layer.msg('Sorry~ ', function() {
              //  window.location.href = CAICUI.Common.loginLink;
              // });
            }
          },
          fail: function(data) {
            window.location.href = CAICUI.Common.loginLink;
            // 您已经很长时间没有操作，为了您的账号安全，请重新登录。
            // layer.msg('Sorry~ ', function() {
            //  window.location.href = CAICUI.Common.loginLink;
            // });
          }
        })
      } else if (data.state == "success") {
        payload.done(data)
      } else if (data.state == "error" || data.msg == "error") {
        if (payload.fail) {
          payload.fail(data)
        } else {
          console.log(data)
        }
      } else {
        if (payload.fail) {
          payload.fail(data)
        } else {
          console.log(data)
        }
      }
    },
    // 接口调用失败的回调函数
    requestFail: function(payload, data) {
      if (payload.fail) {
        payload.fail(data)
      }
    },
    // 接口调用结束的回调函数（调用成功、失败都会执行）
    requestComplete: function(payload, data) {
      if (payload.complete) {
        payload.complete(data)
      }
    }
  }
});
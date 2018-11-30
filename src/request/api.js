
export default{
		// 接口域名
		"host": {
			"action": "https://action.zbgedu.com",
			"actionDemo": "https://actionDemo.zbgedu.com",
			"actionDev": "https://actionDev.zbgedu.com",
			"actionMock": "http://localhost:3080",

			"api": "https://api.zbgedu.com",
			"apiDemo": "https://apiDemo.zbgedu.com",
			"apiDev": "https://apiDev.zbgedu.com",

			"static": "https://exstatic.zbgedu.com",
			"img": "https://exstatic.zbgedu.com",
			"QRCode": "https://exstatic.zbgedu.com",
			"demoQRCode": "http://192.168.10.201:9994",
			"imgAddress": "https://exstatic.zbgedu.com",
			"infoAddress": "https://www.zbgedu.com/",
			"IPLocation": "https://www.zbgedu.com/api/v2/"
		},
		// node接口前缀
		'nodePrefix': '/api/userAction/scene/mobileIndex',
		// 没有找到接口路径，默认跳转的接口
		'notFindUrl': '/help',
		// java，php，node, json
		'examples': {
			'name': '接口示例', // api名称
			'apiType': 'node', // api类型-java，php，node
			'isPrefix': true, // 是否使用接口前缀(/api/userAction/scene/mobileIndex)-true：使用，false：不使用
			'path': '/help', // api地址
			'type': 'GET', // api类型- GET,POST
			'isMock': false, // 是否使用假数据- true：使用，false：不使用
			'mock': '/mock/node-help.json', // 假数据地址-本地json文件
			'isQuery': false, // 是否使用默认参数
			'queryData': { // api默认请求数据
				'help': 'help'
			}
		},
		'getcoursecategory': {
			'staticData': '../assets/staticData/getcoursecategory.json',
			'staticDataDemo': '/assets/staticData/getcoursecategory.json'
		},
		'getStaticExercise': {
			'staticData': '../assets/staticData/getStaticExercise.json',
			'staticDataDemo': '/assets/staticData/getStaticExercise.json'
		},
		'node-login': {
			'name': '登录',
			'apiType': 'node',
			'isPrefix': true,
			'path': '/api/userAction/scene/mobileIndex/login',
			'type': 'POST',
			'isMock': false,
			'mock': '/mock/node-login.json',
			'isQuery': false,
			'queryData': {
				'type': "pcWeb", // 登录设备类型
				'username': "zpk", // 登录用户名
				'password': "123456" // 登录密码
			}
		},
		'node-classCourseList': {
			'name': '课程班级列表',
			'apiType': 'node',
			'isPrefix': true,
			'path': '/api/userAction/scene/mobileIndex/classCourseList',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/classCourseList.json',
			'isQuery': false,
			'queryData': {
				'token': '2c18a158-e27c-429a-b63a-d3ddab3a1b12' // 登录token
			}
		},
		'node-classCourseDetail': {
			'name': '课程班级详情',
			'apiType': 'node',
			'isPrefix': true,
			'path': '/api/userAction/scene/mobileIndex/classCourseDetail',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/classCourseDetail.json',
			'isQuery': false,
			'queryData': {
				'token': '2c18a158-e27c-429a-b63a-d3ddab3a1b12', // 登录token
				'memberId': '8a22ecb553a0b1320153a7251a1e149f', // 登录用户id
				'classId': 'e1699c9662050a66f0d6fd5af3823604', // 班级id
				'courseId': 'b23d4273c672a706276ee50093eb685a' // 课程id
			}
		},
		'node-examReport': {
			'name': '测评成绩报告',
			'apiType': 'node',
			'isPrefix': true,
			'path': '/api/userAction/scene/mobileIndex/examReport',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/examReport.json',
			'isQuery': false,
			'queryData': {
				'memberId': '8a22ecb553a0b1320153a7251a1e149f', // 登录用户id
				'knowledgePointId': '0cc46b6d682832cff5c5073651eb8b9e', // 试卷id
				'examenNum': '0' // 试卷批次
			}
		},
		'node-teachingProgram': {
			'name': '课程班级教学大纲',
			'apiType': 'node',
			'isPrefix': true,
			'path': '/api/userAction/scene/mobileIndex/teachingProgram',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/node-classCourse-teachingProgram.json',
			'isQuery': false,
			'queryData': {
				'courseId': "b23d4273c672a706276ee50093eb685a" // 课程id
			}
		},
		'node-teachingPlan': {
			'name': '课程班级教学计划',
			'apiType': 'node',
			'isPrefix': true,
			'path': '/api/userAction/scene/mobileIndex/teachingPlan',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/node-classCourse-teachingPlan.json',
			'isQuery': false,
			'queryData': {
				'courseId': "b23d4273c672a706276ee50093eb685a" // 课程id
			}
		},
		'node-message-list': {
			'name': '消息列表',
			'apiType': 'node',
			'isPrefix': true,
			'path': '/api/userAction/scene/mobileIndex/messageList',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/message-list.json',
			'isQuery': false,
			'queryData': {
				'token': '2c18a158-e27c-429a-b63a-d3ddab3a1b12', // 用户登录token
				'isRead': '0', // 是否查看
				'pageNo': '1', // 页码
				'pageSize': '20' // 页数
			}
		},
		'actionGetCourseProgress': {
			'name': '获取课程进度',
			'apiType': 'node',
			'isPrefix': false,
			'path': '/api/userAction/course/getCourseProgress/v1.0/',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/actionGetCourseProgress.json',
			'isQuery': false,
			'queryData': {
				'token': '2e9e8aa0-6048-4e0b-ac88-b46b3e0261c6',
				'memberId': '8a22ecb553a0b1320153a7251a1e149f',
				'courseId': '8a22ecb55678b61b0156b1b9e20702b0,ff8080814f0b1b74014f158ab55a0e33'
			}
		},
		'actionGetTasksProgress': {
			'name': '获取任务进度',
			'apiType': 'node',
			'isPrefix': false,
			'path': '/api/userAction/course/getTasksProgress/v1.0/',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/actionGetTasksProgress.json',
			'isQuery': false,
			'queryData': {
				'token': '2e9e8aa0-6048-4e0b-ac88-b46b3e0261c6',
				'memberId': '8a22ecb553a0b1320153a7251a1e149f',
				'courseId': '8a22ecb55678b61b0156b1b9e20702b0,ff8080814f0b1b74014f158ab55a0e33'
			}
		},
		'actionTaskProgress': {
			'name': '保存任务进度',
			'apiType': 'node',
			'isPrefix': false,
			'path': '/api/userAction/course/taskProgress/v1.0/',
			'type': 'GET',
			'isMock': false,
			'mock': '/mock/taskProgress.json',
			'isQuery': false,
			'queryData': {
				'token': '2e9e8aa0-6048-4e0b-ac88-b46b3e0261c6',
				'memberId': '8a22ecb553a0b1320153a7251a1e149f',
				'courseId': '8a22ecb55678b61b0156b1b9e20702b0,ff8080814f0b1b74014f158ab55a0e33'
			}
		},


		'bbslist': {
			'path': '/api/studytools/bbslist/v1.0',
			'mock': '/mock/bbslist.json',
		},
		'bbsSolve': {
			'path': '/api/studytools/bbsSolve/v1.0',
			'mock': '/mock/bbslist.json',
		},
		'bbsdetail': {
			'path': '/api/studytools/bbsdetail/v1.0',
			'mock': '/mock/bbsdetail.json',
		},
		'bbslist_myJoin': {
			'path': '/api/studytools/bbslist_myJoin/v1.0',
			'mock': '/mock/bbslist_myJoin.json',
		},
		'bbs_praise': {
			'path': '/api/studytools/bbs_praise/v1.0',
			'mock': '/mock/bbs_praise.json',
		},
		'bbsreply': {
			'path': '/api/studytools/bbsreply/v1.0',
			'mock': '/mock/bbsreply.json',
			'type': 'POST'
		},
		'bbssave': {
			'path': '/api/studytools/bbssave/v1.0',
			'mock': '/mock/bbssave.json',
			'type': 'POST'
		},
		'bbs_del': {
			'path': '/api/studytools/bbs_del/v1.0',
			'mock': '/mock/bbs_del.json',
		},
		'course-node': {
			'path': '/api/v2/course/node',
			'mock': '/mock/course-node.json',
		},
		'nodelist': {
			'path': '/api/studytools/nodelist/v2.1',
			'mock': '/mock/nodelist.json',
		},
		'nodedetail': {
			'path': '/api/studytools/nodedetail/v2.1',
			'mock': '/mock/nodedetail.json',
		},
		'node-list': {
			'mock': '/mock/node-list.json',
			'path': '/api/v2/note/list'
		},
		'nodesave': {
			'path': '/api/studytools/nodesave/v2.1',
			'mock': '/mock/nodesave.json',
			'type': 'POST'
		},
		'coursechapternodecount': {
			'path': '/api/studytools/coursechapternodecount/v2.1',
			'mock': '/mock/coursechapternodecount.json',
			'type': 'POST'
		},
		'myallcoursechapternodecount': {
			'path': '/api/studytools/myallcoursechapternodecount/v2.1',
			'mock': '/mock/myallcoursechapternodecount.json',
			'type': 'POST'
		},
		'delmycontent': {
			'path': '/api/studytools/delmycontent/v2.1',
			'mock': '/mock/delmycontent.json',
		},

		'ad_discuss': {
			'path': '/api/studytools/ad_discuss/v2.1',
			'mock': '/mock/ad_discuss.json',
		},
		'bbs_forumlistShow': {
			'path': '/api/studytools/bbs_forumlistShow/v1.0',
			'mock': '/mock/bbs_forumlistShow.json',
		},
		'getNidExerciseDetail': {
			'path': '/api/teachsource/examen/getNidExerciseDetail/data',
			'mock': '/mock/getNidExerciseDetail.json',
		},
		'exercisePointCountCache': {
			'path': '/api/extendapi/examen/get_exercise_point_count_cache',
			'mock': '/mock/exercisePointCountCache.json',
			'type': 'POST'
		},
		'exerciseKnowledgeMemberStatus': {
			'path': '/api/userAction/examen/get_exercise_knowledge_member_status',
			'mock': '/mock/exerciseKnowledgeMemberStatus.json',
			'type': 'POST'
		},
		'userKnowledgePointExerciseList': {
			'path': '/api/userAction/examen/get_user_knowledge_point_exercise_list',
			'mock': '/mock/userKnowledgePointExerciseList.json',
		},
		'setMemberExerciseLog': {
			'path': '/api/userAction/examen/setMemberExerciseState',
			'mock': '/mock/setMemberExerciseLog.json',
			'type': 'POST'
		},
		'get_user_knowledge_point_exercise_list': {
			'path': '/api/userAction/examen/get_user_knowledge_point_exercise_list',
			'mock': '/mock/get_user_knowledge_point_exercise_list.json',
		},
		'get_exercise_knowledge_member_status': {
			'path': '/api/userAction/examen/get_exercise_knowledge_member_status',
			'mock': '/mock/get_exercise_knowledge_member_status.json',
			'type': 'POST'
		},
		'getMemberErrorExercise': {
			'path': '/api/userAction/examen/getMemberErrorExercise',
			'mock': '/mock/getMemberErrorExercise.json',
		},

		'setMemberErrorExercise': {
			'path': '/api/userAction/examen/setMemberErrorExercise',
			'mock': '/mock/setMemberErrorExercise.json',
			'type': 'POST'
		},
		'setMemberExamenFinish': {
			'path': '/api/userAction/examen/setMemberExamenFinish',
			'mock': '/mock/setMemberExamenFinish.json',
			'type': 'POST'
		},
		'delMemberExercise': {
			'path': '/api/userAction/examen/delMemberExercise',
			'mock': '/mock/delMemberExercise.json',
		},

		'token': {
			'path': '/api/zbids/app/gettoken/v1.0/',
			'mock': '/mock/token.json',
			'data': {
				"appType": "pc",
				"appId": "pcWeb",
				"appKey": "e877000be408a6cb0428e0f584456e03"
			}
		},
		'login': {
			'path': '/api/zbids/member/login/v1.0',
			'mock': '/mock/login.json',
			'type': 'POST'
		},
		'logout': {
			'path': '/api/zbids/member/loginout/v1.0',
			'mock': '/mock/logout.json',
		},
		'member': {
			'path': '/api/zbids/member/getmemberinfo',
			'mock': '/mock/getmemberinfo.json',
		},
		'loginloglist': {
			'path': '/api/zbids/member/getLoginLog',
			'mock': '/mock/node-login.json',
		},
		'getExamDate': {
			'path': '/api/business/coursestudy/getExamDate',
			'mock': '/mock/getExamDate.json',
		},
		'message-list': {
			'path': '/api/study/message/list/v1.0',
			'mock': '/mock/message-list.json'
		},
		'updateStatus': {
			'path': '/api/study/message/updateStatus/v1.0',
			'mock': '/mock/updateStatus.json',
		},
		'mycount': {
			'path': '/api/studytools/mycount/v2.1',
			'mock': '/mock/mycount.json',
		},
		'slide-list': {
			'path': '/api/article/slide/list',
			'mock': '/mock/slide-list.json',
		},
		'exam-list': {
			'path': '/api/userAction/examen/get_exercise_knowledge_member_status',
			'mock': '/mock/exam-list.json',
		},
		'learningcourse': { // 在学
			'path': '/api/business/learning/learningcourse/v1.0',
			'notMock': false,
			'mock': '/mock/learningcourse.json',
		},
		'noActivecourse': { // 未激活
			'path': '/api/business/learning/noActivecourse/v1.0',
			'mock': '/mock/noActivecourse.json',
		},
		'expirationcourse': { // 过期
			'path': '/api/business/learning/expirationcourse/v1.0',
			'mock': '/mock/expirationcourse.json',
		},
		'courseBaseInfo': {
			'path': '/api/v2.1/course/courseBaseInfo/data',
			'mock': '/mock/courseBaseInfo.json',
			'urlDemo': '/api/v2.1/course/courseBaseInfo/data',
			'type': 'POST'
		},
		'courseDetail': {
			'path': '/api/teachsource/course/courseDetail/data',
			'mock': '/mock/courseDetail.json',
			'urlDemo': '/api/teachsource/course/courseDetail/data',
		},
		'coursesBaseInfo': {
			'path': '/api/teachsource/course/courseBaseInfo/data',
			'mock': '/mock/courseBaseInfo.json',
			'urlDemo': '/api/teachsource/course/courseBaseInfo/data',
		},
		'getTasksProgress': {
			'path': '/api/v2/study/getTasksProgress',
			'mock': '/mock/getTasksProgress.json',
		},
		'taskProgress': {
			'path': '/api/v2.1/chapter/taskProgress',
			'mock': '/mock/taskProgress.json',
			'type': 'POST'
		},
		'coursestatus': {
			'path': '/api/business/learning/courseactivestatus',
			'mock': '/mock/coursestatus.json',
		},
		'handout': {
			'path': '/api/teachsource/course/courseBaseInfo/data',
			'mock': '/mock/handout.json',
			'urlDemo': '/api/teachsource/course/courseBaseInfo/data'
		},
		'subjectTimeList': {
			'path': '/api/teachsource/exam/subjectTimeList',
			'mock': '/mock/subjectTimeList.json',
		},
		'timeList': {
			'path': '/api/teachsource/exam/timeList',
			'mock': '/mock/timeList.json',
		},
		'active': {
			'path': '/api/business/order/courseActive/v1.0',
			'mock': '/mock/courseActive.json',
		},

		'addLMG': {
			'path': '/api/business/complaintOpinion/create/v1.0',
			'mock': '/mock/addLMG.json',
			'type': 'POST'
		},
		'version': {
			'path': '/api/teachsource/course/coursesversionlist/data',
			'urlDemo': '/api/teachsource/course/coursesversionlist/data',
			'mock': '/mock/version.json',
		},


		'wileyCourseActive': {
			'path': '/api/business/order/wileyCourseActive/v1.0',
			'mock': '/mock/wileyCourseActive.json',
		},
		'wileyCourseStudy': {
			'path': '/api/business/order/wileyCourseStudy/v1.0',
			'mock': '/mock/wileyCourseStudy.json',
		},
		'getAppointmentState': {
			'path': '/publicCourse/getAppointmentState.do',
			'mock': '/mock/getAppointmentState.json',
			'type': 'POST'
		},
		'appointClick': {
			'path': '/publicCourse/appointClick.do',
			'mock': '/mock/appointClick.json',
			'type': 'POST'
		},
		'getExerciseIds': {
			'path': '/api/teachsource/examen/getExerciseIds',
			'urlDemo': '/api/teachsource/examen/getExerciseIds/data',
			'mock': '/mock/getExerciseIds.json',
		},
		'getExerciseBaseInfo': {
			'urlDemo': '/api/teachsource/examen/getExerciseBaseInfo/data',
			'path': '/api/teachsource/examen/getExerciseBaseInfo/data',
			'isMock': false,
			'mock': '/mock/getExerciseBaseInfo.json',
		},

		'getmembernotprocnoticelist': {
			'path': '/api/business/coursegroup/getmembernotprocnoticelist',
			'mock': '/mock/getmembernotprocnoticelist.json',
		},
		'membercheck': {
			'path': '/api/business/coursegroup/membercheck',
			'mock': '/mock/membercheck.json',
		},

		'appointment': {
			'path': '/api/userAction/opencourse/appointment',
			'mock': '/mock/appointment.json',
		},
		'getappointmentlist': {
			'path': '/api/userAction/opencourse/getappointmentlist',
			'mock': '/mock/getappointmentlist.json',
		},
		'getopencoursedetail': {
			'path': '/api/teachsource/course/getopencoursedetail/data',
			'mock': '/mock/getopencoursedetail.json',
		},
		'includeopencoursegroup': {
			'path': '/api/business/coursegroup/includeopencoursegroup',
			'mock': '/mock/includeopencoursegroup.json',
		},
		'memberbuycategorylist': {
			'path': '/api/business/course/memberbuycategorylist',
			'mock': '/mock/memberbuycategorylist.json',
		},
		'memberbuylist': {
			'path': '/api/business/coursegroup/memberbuylist',
			'mock': '/mock/memberbuylist.json',
		},
		'getTotalTime': {
			'path': '/api/userAction/openCourse/getTotalTime',
			'mock': '/mock/getTotalTime.json',
		},
		'settotaltime': {
			'path': '/api/userAction/openCourse/settotaltime',
			'mock': '/mock/settotaltime.json',
		},
		'setgift': {
			'path': '/api/userAction/openCourse/setgift',
			'mock': '/mock/setgift.json',
		},
		'payment': {
			'path': '/api/business/order/payment',
			'mock': '/mock/payment.json',
			'type': 'POST'
		},
		'ccLogin': {
			'host': 'https://view.csslcloud.net',
			'path': '/api/view/login',
			'mock': '/mock/ccLogin.json',
			'type': 'POST'
		},

		'courseCategoryExamenCount': {
			'path': '/api/teachsource/examen/courseCategoryExamenCount',
			'mock': '/mock/courseCategoryExamenCount.json',
		},
		'courseCategoryExamenList': {
			'path': '/api/teachsource/examen/courseCategoryExamenList',
			'mock': '/mock/courseCategoryExamenList.json',
		},
		'childKnowledgeNodePointList': {
			'path': '/api/teachsource/knowledge/childKnowledgeNodePointList',
			'mock': '/mock/childKnowledgeNodePointList.json',
		},
		'getListById': {
			'path': '/api/teachsource/resources/getListById',
			'mock': '/mock/getListById.json',
		},
		'getDetailById': {
			'path': '/api/teachsource/resources/getDetailById',
			'mock': '/mock/getDetailById.json',
		},
		'getExamenInfo': {
			'path': '/api/teachsource/examen/getExamenInfo',
			'mock': '/mock/getExamenInfo.json',
		},
		'getKnowledgePointInfo': {
			'path': '/api/teachsource/knowledge/getKnowledgePointInfo',
			'mock': '/mock/getKnowledgePointInfo.json',
		},
		'searchCourseAlterationsByVersionId': {
			'mock': '/mock/searchCourseAlterationsByVersionId.json',
			'path': '/api/teachsource/courseAlteration/searchCourseAlterationsByVersionId'
		},
		'courselist': {
			'name': '获取商品包课程列表',
			'path': '/api/business/coursegroup/courselist',
			'mock': '/mock/courselist.json',
		},
		'getplan': {
			'name': '获取课程计划模板',
			'path': '/api/userAction/study/getplan',
			'mock': '/mock/getplan.json',
		},
		'memberGetplan': {
			'name': '获取学员学习计划',
			'path': '/api/userAction/study/member/getplan',
			'mock': '/mock/memberGetplan.json',
		},
		'getPreview': {
			'name': '获取学员学习预览',
			'path': '/api/userAction/study/member/getPreview',
			'mock': '/mock/getPreview.json',
		},
		'saveplan': {
			'name': '保存学员学习预览',
			'path': '/api/userAction/study/member/saveplan',
			'mock': '/mock/saveplan.json',
			'type': 'POST'
		},
		'getMaxOverplan': {
			'name': '获取学员未完成的学习计划最大周',
			'path': '/api/userAction/study/member/getMaxOverplan',
			'mock': '/mock/getMaxOverplan.json',
		},
		'updateplan': {
			'name': '更新学员学习计划',
			'path': '/api/userAction/study/member/updateplan',
			'mock': '/mock/updateplan.json',
			'type': 'POST'
		},
		'saveExtension': {
			'name': '申请修改学员计划',
			'path': '/api/userAction/study/member/saveExtension',
			'mock': '/mock/saveExtension.json',
			'type': 'POST'
		},
		'editinfo': {
			'name': '学员完善个人信息',
			'path': '/api/zbids/member/editinfo',
			'mock': '/mock/editinfo.json',
			'type': 'POST'
		},
		'getappdownloadinfo': {
			'name': '获取产品版本和下载信息',
			'path': '/api/zbids/app/getappdownloadinfo',
			'mock': '/mock/getappdownloadinfo.json',
		},
		'applyrestudy': {
			'name': '申请重听提交成绩',
			'path': '/api/business/learning/applyrestudy',
			'mock': '/mock/applyrestudy.json',
			'type': 'POST'
		},
		'fileUpload': {
			'name': '上传图片',
			'mock': '/mock/fileUpload.json',
			'href': 'https://api.zbgedu.com/api/v2.1/commons/fileUpload',
			'type': 'POST'
		},
		'applyrestudylist': {
			'name': '学员申请重听审核状态列表',
			'mock': '/mock/applyrestudylist.json',
			'path': '/api/business/learning/applyrestudylist',
			'type': 'POST'
		},
		'addDegree': {
			'name': '保存学员试卷某题的掌握情况',
			'path': '/api/userAction/study/member/addDegree',
			'mock': '/mock/addDegree.json',
			'type': 'POST'
		},
		'getExeDegree': {
			'name': '获取学员试卷某题的掌握情况',
			'path': '/api/userAction/study/member/getExeDegree',
			'mock': '/mock/getExeDegree.json'
		},
		'addUnknow': {
			'name': '懂与不懂的备注提交',
			'path': '/api/userAction/php/examen/member/addDegree',
			'type': 'POST'
		}
	};

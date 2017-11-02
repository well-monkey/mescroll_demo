// /**
//  Created by liuximing on 2017/10/30.
//  ╭︿︿︿╮
//  {/ o o /}
//  ( (oo) )
//  ︶︶︶
//  **/
// // const greeter = require('./Greeter.js');//es5
// // import Greeter from './Greeter';           //es6
import '../css/main.css';
import '../css/greet/greet.css';
import '../css/mescroll.min.css';
// // document.querySelector("#root").appendChild(Greeter());
console.log('这是主页的数据');
// var pdlist1 =require('./pdlist1.js');
// var MeScroll = require('./mescroll.min.js');
// var Vue = require('./vue.min.js');
// var vm = new Vue({
// 	el: "#dataList",
// 	data: {
// 		mescroll: null,
// 		pdlist: []
// 	},
// 	mounted: function() {
// // 		//创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
// // 		//解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
// 		var self = this;
// 		self.mescroll = new MeScroll("mescroll", {
// 			up: {
// 				callback: self.upCallback, //上拉回调
// 				//以下参数可删除,不配置
// 				//page:{size:8}, //可配置每页8条数据,默认10
// 				toTop:{ //配置回到顶部按钮
// 					// src : "../res/img/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
// 					//offset : 10010
// 				},
// 				empty:{ //配置列表无任何数据的提示
// 					warpId:"dataList",
// 					// icon : "../res/img/mescroll-empty.png" ,
// //						  	tip : "亲,暂无相关数据哦~" ,
// //						  	btntext : "去逛逛 >" ,
// //						  	btnClick : function() {
// //						  		alert("点击了去逛逛按钮");
// //						  	}
// 				}
// 			}
// 		});
// //
// // 		//初始化vue后,显示vue模板布局
// 		document.getElementById("dataList").style.display="block";
// 	},
// 	methods: {
// // 		//上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
// 		upCallback: function(page) {
// // 			//联网加载数据
// 			var self = this;
// 			getListDataFromNet(page.num, page.size, function(curPageData) {
// 				//curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
// 				//如果是第一页需手动制空列表
// 				if(page.num == 1) self.pdlist = [];
// 				//更新列表数据
// 				self.pdlist = self.pdlist.concat(curPageData);
// 				//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
// 				//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
// 				console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", self.pdlist.length==" + self.pdlist.length);
//
// 				//方法一(推荐): 后台接口有返回列表的总页数 totalPage
// 				//self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
//
// 				//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
// 				//self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
//
// 				//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
// 				//self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
//
// 				//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
// 				self.mescroll.endSuccess(curPageData.length);
//
// 			}, function() {
// 				//联网失败的回调,隐藏下拉刷新和上拉加载的状态;
// 				self.mescroll.endErr();
// 			});
// 		},
// 	},
// });
//
// /*联网加载列表数据*/
// function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
// // 	//延时一秒,模拟联网
// 	setTimeout(function () {
// //          	axios.get("xxxxxx", {
// //					params: {
// //						num: pageNum, //页码
// //						size: pageSize //每页长度
// //					}
// //				})
// //				.then(function(response) {
// 		var data=pdlist1; // 模拟数据: ../res/pdlist1.js
// 		var listData=[];//模拟分页数据
// 		for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
// 			if(i==data.length) break;
// 			listData.push(data[i]);
// 		}
// 		successCallback&&successCallback(listData);//成功回调
// //				})
// //				.catch(function(error) {
// //					errorCallback&&errorCallback()//失败回调
// //				});
// 	},500)
// }
//
// //禁止PC浏览器拖拽图片,避免与下拉刷新冲突;如果仅在移动端使用,可删除此代码
// document.ondragstart=function() {return false;}
//
//
// // import Mock from '../util/mock';
// // console.log(Mock)
//
// // var mescroll = new MeScroll("mescroll", { //第一个参数"mescroll"对应上面布局结构div的id
// // 	//如果您的下拉刷新是重置列表数据,那么down完全可以不用配置,具体用法参考第一个基础案例
// // 	//解析: down.callback默认调用mescroll.resetUpScroll(),而resetUpScroll会将page.num=1,再触发up.callback
// // 	down: {
// // 		callback: downCallback //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
// // 	},
// // 	up: {
// // 		callback: upCallback //上拉加载的回调
// // 	}
// // });
// //
// // //下拉刷新的回调
// // function downCallback() {
// // // 	$.ajax({
// // // 		url: 'http://mockjs',
// // // 		success: function(data) {
// // // 			//联网成功的回调,隐藏下拉刷新的状态;
// // // 			console.log(data)
// // // 			mescroll.endSuccess(); //无参
// // // 			//设置数据
// // // 			//setXxxx(data);//自行实现 TODO
// // // 		},
// // // 		error: function(data) {
// // // 			//联网失败的回调,隐藏下拉刷新的状态
// // // 			mescroll.endErr();
// // // 		}
// // // 	});
// // }
// //
// // // //上拉加载的回调 page = {num:1, size:10}; num:当前页 默认从1开始, size:每页数据条数,默认10
// // function upCallback(page) {
// // // 	$.ajax({
// // // 		url: 'xxxxxx?num=' + page.num + "&size=" + page.size, //如何修改page.num从0开始 ?
// // // 		success: function(curPageData) {
// // // 			//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
// // // 			//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空,显示empty配置的内容;
// // // 			//列表如果无下一页数据,则提示无更多数据,(注意noMoreSize的配置)
// // //
// // // 			//方法一(推荐): 后台接口有返回列表的总页数 totalPage
// // // 			//必传参数(当前页的数据个数, 总页数)
// // // 			//mescroll.endByPage(curPageData.length, totalPage);
// // //
// // // 			//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
// // // 			//必传参数(当前页的数据个数, 总数据量)
// // // 			//mescroll.endBySize(curPageData.length, totalSize);
// // //
// // // 			//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
// // // 			//必传参数(当前页的数据个数, 是否有下一页true/false)
// // // 			//mescroll.endSuccess(curPageData.length, hasNext);
// // //
// // // 			//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
// // // 			//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
// // // 			//如果传了hasNext,则翻到第二页即可显示无更多数据.
// // // 			//mescroll.endSuccess(curPageData.length);
// // //
// // // 			//设置列表数据
// // // 			//setListData(curPageData);//自行实现 TODO
// // // 		},
// // // 		error: function(e) {
// // // 			//联网失败的回调,隐藏下拉刷新和上拉加载的状态
// // // 			mescroll.endErr();
// // // 		}
// // // 	});
// // }
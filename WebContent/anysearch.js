/*
$(document).ready(function() {
$.ajax({
 	url: 'jsdata/indexdata.json',
	type : 'POST',
	dataType : 'json',
	data : $.param(searchall),
	success : function(data) {
//		location.href = "searchall.html";

		$.each(data.root.advertiserresults, function(i, item) {
			alert(item.label + " : " + item.link);
		});

		$.each(data.root.productresults, function(i, item) {
			alert(item.label + " : " + item.link);
		});
	},
	statusCode : {
		404 : function() {
			alert("没有找到相关文件~~");
		}
	}
});
});
 */
$(function() {
	$(".search").on(
			"keydown",
			function() {
				var event = event || window.event;
				var searchvalue;
				if (event.keyCode == 13) {
					searchvalue = $(".search").val();
					$.get("searchall.html", "", function(data) {
						// 这里是回调方法。返回data数据。这里想怎么处理就怎么处理了。
						console.log(searchvalue);
						// fail in firefox, works in chrome
						window.location.href = "searchall.html?searchvalue="
								+ searchvalue;
						// var postdata = searchall;
						var postdata = ReturnJsonStr("search", "all",
								getUrlParam("searchvalue"));
						var successfunction = seachallsuccess;
						ajaxset(postdata, successfunction);
					});

				}
			});
});
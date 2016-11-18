$(function() {
	var postdata = ReturnJsonStr("search","all",getUrlParam("searchvalue"));
//	var postdata = searchall;
	var successfunction = seachallsuccess;
	ajaxset(postdata, successfunction);
});

/*
$(document).ready(function() {
	$.ajax({
//		url : 'jsdata/searchall.json',
//		url : '/MobCastle_UI/AjaxProxy',
//		url : 'http://localhost:9990/MobCastle_UI/AjaxProxy', //跨域请求问题重现了
		url : 'http://localhost:9898/', //跨域请求问题重现了
		type : 'POST',
		dataType : 'json',
		data : 'request=' + searchall,
		cache : false,
		success : seachallsuccess,
		statusCode : {
			404 : function() {
				alert("没有找到相关文件~~");
			}
		}
	});
});
*/
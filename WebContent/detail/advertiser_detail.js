/*  
 $(function() {
	$.ajax({
		url : '../jsdata/checkadvertiser.json',
//		url : '/MobCastle_UI/AjaxProxy',
		type : 'POST',
		dataType : 'json',
		data : $.param(checkdetail),
		success : advertiserdetailsuccess,
		statusCode : {
			404 : function() {
				alert("没有找到相关文件~~");
			}
		}
	});
});
*/

$(function() {
//	var posturl = '../jsdata/checkadvertiser.json';
	var postdata = ReturnJsonStr_check("advertiser",getUrlParam("id"));
//	var postdata = checkadvertiser;
	var successfunction = advertiserdetailsuccess;
//	ajaxset_local(posturl, postdata, successfunction);
	ajaxset(postdata, successfunction);
	/*
	var editlink=$("a[href='edit.html']");
	editlink.attr(
			'href', "../edit/advertiser-edit.html?id="+getUrlParam("id"));
*/		
});
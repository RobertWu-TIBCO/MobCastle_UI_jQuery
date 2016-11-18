$(document).ready(function() {
	$.ajax(function() {
		// var posturl = '/MobCastle_UI/AjaxProxy';
		var posturl = 'http://localhost:9990/MobCastle_UI/AjaxProxy';
		var postdata = data;
		var successfunction = offereditsuccess;
		ajaxset(posturl, postdata, successfunction);
	});
});

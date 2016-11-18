$(function() {
//	var posturl = '../jsdata/checkproduct.json';
//	var postdata = checkproduct;
	var postdata = ReturnJsonStr_check("product",getUrlParam("id"));
	var successfunction = advertiserdetailsuccess;
	ajaxset(postdata, successfunction);
});

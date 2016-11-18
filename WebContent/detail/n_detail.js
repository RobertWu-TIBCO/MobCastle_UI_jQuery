$(function() {
//	var posturl = '../jsdata/checkn.json';
//	var postdata = checkn;
	var postdata = ReturnJsonStr_check("n",getUrlParam("id"));
	var successfunction = advertiserdetailsuccess;
//	ajaxset_local(posturl, postdata, successfunction);
	ajaxset(postdata, successfunction);
});

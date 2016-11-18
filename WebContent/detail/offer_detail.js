$(function() {
//	var posturl = '../jsdata/checkoffer.json';
//	var postdata = checkoffer;
	var postdata = ReturnJsonStr_check("offer",getUrlParam("id"));
	var successfunction = offerdetailsuccess;
	ajaxset(postdata, successfunction);
});

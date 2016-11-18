$(function() {
//	var posturl = '../jsdata/checkcampaign.json';
//	var postdata = checkcampaign;
	var postdata = ReturnJsonStr_check("campaign",getUrlParam("id"));
	var successfunction = campaigndetailsuccess;
//	ajaxset_local(posturl, postdata, successfunction);
	ajaxset(postdata, successfunction);
	
});
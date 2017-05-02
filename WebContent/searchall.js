function generalSearch(searchvalue) {
	// var postdata = searchall;
	var postdata = ReturnJsonStr("search", "all", searchvalue);
	// getUrlParam("searchvalue"));
	var successfunction = seachallsuccess;
	console.log(postdata,successfunction);
	ajaxset(postdata, successfunction);
}
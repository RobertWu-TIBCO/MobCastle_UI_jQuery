$(function() {
	$("#buy").on("click", function() {
		var EditArray = GetEditArray();

		var tableIdElement = $("[id$='_id']");
		var tablename = tableIdElement.attr('id').split('_')[0];
	
		console.log("tablename : " + tablename );
		var postdata = ReturnJsonStr("add", tablename, "", "", EditArray);
		var successfunction = editsuccess;
		ajaxset(postdata, successfunction);
	});
});

$(function() {
	$("#buy").on("click", function() {
		var EditArray = GetEditArray();

		var tableIdElement = $("[id$='_id']");
		var tablename = tableIdElement.attr('id').split('_')[0];
		var id = tableIdElement.text();
		console.log("tablename : " + tablename + " \n id: " + id);
		var postdata = ReturnJsonStr("update", tablename, "", id, EditArray);
		var successfunction = editsuccess;
		ajaxset(postdata, successfunction);
	});
});

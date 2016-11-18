$(document).ready(function() {
	var data = {};
	$("#buy").on("click", function() {
		var flag = checkIsLegal();

		$('[input]').find("id").each(function() {
			var dom = $(this);
			data[dom.attr('id')] = dom.val();
		});

		addLegalCheck();
	});
});

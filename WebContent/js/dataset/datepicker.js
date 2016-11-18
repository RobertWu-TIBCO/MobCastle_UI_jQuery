$(document).ready(function() {
	$('input[name="beginTime"],input[name="endTime"]').datepicker({
		singleDatePicker : true,
		Time : new Date(),
		startDate : "2014-05-08",
		endDate : "2014-07-08",
		callback : function(i) {
			console.log(i)
		}
	});
});

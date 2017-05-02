$(function() {
	$("#buy").on(
			"click",
			function() {

				var time1 = $('input[name="beginTime"]').val();
				var time2 = $('input[name="endTime"]').val();
				var accu = $('#selectpicker :selected').val();
				var offerreport = $('#offerreport').val();
				var nreport = $('#nreport').val();
				var debugstr = ' below is the value get from index page : \n '
						+ time1 + "  " + time2 + "  " + accu + "  "
						+ offerreport + "  " + nreport + " " + " \n ended";
				console.log(debugstr);
				var postdata = ReturnJsonStr_report(offerreport,nreport,time1,time2,accu,"report");
//				var postdata = ReturnJsonStr_report(offerreport,nreport,time1,time2,accu,"report_robert");
//				var postdata = report_robert;
				var successfunction = reportsuccess;
				ajaxset(postdata, successfunction);
			});
});


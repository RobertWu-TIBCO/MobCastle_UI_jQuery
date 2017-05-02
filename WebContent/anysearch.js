$(function() {
	$(".search-form").on("keydown", "input", function() {
		var event = event || window.event;
		if (event.keyCode == 13) {
			var searchvalue = $(".search").val();
			console.log("input search value is : " + searchvalue);
			var url = "/MobCastle_UI/searchall.html";
			// var url = "searchall.html?searchvalue=" + searchvalue;
			// $.get(url, "", function(data) {
			if (window.location.href.indexOf("index.html") >= 0)
				window.location.href = url;
			// fail in firefox, works in chrome
			setTimeout(function() {
				// something you want delayed
			}, 1000); // how long do you want the delay to be?
			console.log("window.location.href  :"+window.location.href );
			generalSearch(searchvalue);
			// });
		}
	});
});

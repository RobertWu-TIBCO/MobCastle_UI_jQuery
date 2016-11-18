function ReturnJsonStr(operation, tablename, searchvalue, id, subarray, token) {
	var json = {
		"AllJSONRequests" : {
			"token" : "000000",
			"operation" : operation,
			"tablename" : tablename,
		}
	// 'RowGuid':RowGuid,'Name':Name,'Sex':Sex,'DanWeiName':DanWeiName,'IdentityNum':IdentityNum
	};
	if (!StringEqual(searchvalue, ""))
		json.AllJSONRequests.searchvalue = searchvalue;
	if (!StringEqual(id, ""))
		json.AllJSONRequests.id = id;

	return JSON.stringify(json);
}

function ReturnJsonStr_check(tablename,id){
	var editlink=$("a[href='edit.html']");
	editlink.attr(
			'href', "../edit/"+tablename+"-edit.html?id="+id);
	
	return ReturnJsonStr("check",tablename,"",id);
}

function StringEqual(string1, string2) {
	if ($.trim(string1) == $.trim(string2))
		return true;
	else
		return false;
}

function edit_display(tablename) {
	var postdata = ReturnJsonStr_check(tablename,getUrlParam("id"));
	var successfunction = offereditsuccess;
	ajaxset(postdata, successfunction);
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

var searchall = '{ "AllJSONRequests" : { "token" : "000000", "operation" : "search", "tablename" : "all", "searchvalue" : "2" } }';
var searchoffer = '{ "AllJSONRequests" : { "token" : "000000", "operation" : "search", "tablename" : "offer", "searchvalue" : "2" } }';
var checkcampaign = '{ "AllJSONRequests" : { "token" : "000000", "operation" : "check","tablename" : "campaign", "id" : "5" } }';
var checkproduct = '{ "AllJSONRequests" : { "token" : "000000", "operation" : "check","tablename" : "product", "id" : "2" } }';
var checkn = '{ "AllJSONRequests" : { "token" : "000000","operation" : "check", "tablename" : "n", "id" : "25" } }';
var checkadvertiser = '{ "AllJSONRequests" : { "token" : "000000", "operation" : "check", "tablename" : "advertiser", "id" : "2" } }';
var checkoffer = '{ "AllJSONRequests" : { "token" : "000000","operation" : "check", "tablename" : "offer", "id" : "15" } }';
var checkorecord = '{ "AllJSONRequests" : { "token" : "000000","operation" : "check", "tablename" : "precord", "id" : "1" } }';

function tableresults_detailline(data) {
	$.each(data.root.tableresults.detailline, function(i, item) {
		$('#' + item.name).html(item.value);
		if(item.name.indexOf("mail")>=0)$('#' + item.name).attr('href',"mailto:"+item.value);
		if(item.name.indexOf("_id")>=0)
			{
			var tablename=item.name.split('_')[0];
			var id=item.value.split('-')[0];
			$('#' + item.name).attr('href',"../detail/"+tablename+"-detail.html?id="+id);
//			I see two href for some pages  
			}
	});
}

function relatedresults_relatedline(data) {
	var items = [];
	$
			.each(
					data.root.relatedresults.relatedline,
					function(i, item) {
						var liobj = $('<a href="#">24-达令01-public</a>').attr(
								'href', item.link).html(item.label);
						items
								.push('<li><span class="circle-ring circle-primary"><i class="fa fa-user"></i></span>'
										+ liobj.prop("outerHTML") + ' </li>');
					});
	$("#relatedresults").append(items.join(''));
}

function itempushtoul(results) {
	var items = [];
	$
			.each(
					data.root[results],
					function(i, item) {
						items
								.push('<li><span class  = "circle-ring circle-primary"><i class="fa fa-user"></i></span><a href="'
										+ item.link
										+ '">'
										+ item.label
										+ '</a></li>');
					});
	$("#" + results).append(items.join(''));
}

function productresults(data) {
	var items = [];
	$
			.each(
					data.root.productresults,
					function(i, item) {
						items
								.push('<li><span class  = "circle-ring circle-primary"><i class="fa fa-user"></i></span><a href="'
										+ item.link
										+ '">'
										+ item.label
										+ '</a></li>');
					});
	$("#productresults").append(items.join(''));
}

function advertiserresults(data) {
	var items = [];
	$
			.each(
					data.root.advertiserresults,
					function(i, item) {
						items
								.push('<li><span class  = "circle-ring circle-primary"><i class="fa fa-user"></i></span><a href="'
										+ item.link
										+ '">'
										+ item.label
										+ '</a></li>');
					});
	$("#advertiserresults").append(items.join(''));
}

function offerresults(data) {
	var items = [];
	$
			.each(
					data.root.offerresults,
					function(i, item) {
						items
								.push('<li><span class  = "circle-ring circle-primary"><i class="fa fa-user"></i></span><a href="'
										+ item.link
										+ '">'
										+ item.label
										+ '</a></li>');
					});
	$("#offerresults").append(items.join(''));
}

function nresults(data) {
	var items = [];
	$
			.each(
					data.root.nresults,
					function(i, item) {
						items
								.push('<li><span class  = "circle-ring circle-primary"><i class="fa fa-user"></i></span><a href="'
										+ item.link
										+ '">'
										+ item.label
										+ '</a></li>');
					});
	$("#nresults").append(items.join(''));
}

function seachallsuccess(data) {
	console.log(data);
	advertiserresults(data);
	productresults(data);
	offerresults(data);
	nresults(data);
}

function ajaxset_alert() {
	alert("没有找到相关文件~~");
}

function ajaxset(postdata, successfunction) {
	$.ajax({
		// url : '/MobCastle_UI/AjaxProxy', // no need for servlet once used BW
		// Sample from Oliver
		url : 'http://localhost:9898',
		type : 'POST',
		dataType : 'json',
		data : 'request=' + postdata,
		cache : false,
		success : successfunction,
		statusCode : {
			404 : ajaxset_alert
		}
	});
}

function ajaxset_local(posturl, postdata, successfunction) {
	$.ajax({
		url : posturl,
		type : 'POST',
		dataType : 'json',
		// data : $.param(postdata),
		data : 'request=' + postdata,
		cache : false,
		success : successfunction,
		statusCode : {
			404 : ajaxset_alert
		}
	});
}

function tableresults_detailline_edit(data) {
	$.each(data.root.tableresults.detailline, function(i, item) {
		var element = $('#' + item.name);
		if (element.prop("outerHTML").indexOf('input') != -1) {
			element.val(item.value);
		} else {
			element.html(item.value);
		}
	});
}

function offereditsuccess(data) {
	tableresults_detailline_edit(data);
}

function offerdetailsuccess(data) {
	tableresults_detailline(data);
	relatedresults_relatedline(data);
	$('#clickCount').html(data.root.tableresults.clickCount);
	$('#conversionCount').html(data.root.tableresults.conversionCount);
}

function campaigndetailsuccess(data) {
	tableresults_detailline(data);
	$('#clickCount').html(data.root.tableresults.clickCount);
	$('#conversionCount').html(data.root.tableresults.conversionCount);
}

function advertiserdetailsuccess(data) {
	tableresults_detailline(data);
	relatedresults_relatedline(data);
}

function advertiserdetailsuccessbak(data) {
	$.each(data.root.tableresults.detailline, function(i, item) {
		$('#' + item.name).html(item.value);
	});
	var items = [];
	$
			.each(
					data.root.relatedresults.relatedline,
					function(i, item) {
						var liobj = $('<a href="#">24-达令01-public</a>').attr(
								'href', item.link).html(item.label);
						items
								.push('<li><span class="circle-ring circle-primary"><i class="fa fa-user"></i></span>'
										+ liobj.prop("outerHTML") + ' </li>');
					});
	$("#relatedresults").append(items.join(''));
}
/*
$(function() {
//var anysearch=$('.search-form').find('input')[0];
//$(".search")
$(".search").on(
		"keydown",
		function() {
			var event = event || window.event;
			if (event.keyCode == 13) {
				var searchvalue = $(".search").val();
//				searchvalue = $(this).val();
				console.log("searchvalue : "+searchvalue);
				$.get("searchall.html", "", function(data) {
					// 这里是回调方法。返回data数据。这里想怎么处理就怎么处理了。
					// fail in firefox, works in chrome
					window.location.href = "searchall.html?searchvalue="
							+ searchvalue;
					// var postdata = searchall;
					var postdata = ReturnJsonStr("search", "all",
							getUrlParam("searchvalue"));
					var successfunction = seachallsuccess;
					ajaxset(postdata, successfunction);
				});

			}
		});
});
*/
/*
 * var checkcampaign = { "AllJSONRequests" : { "token" : "000000", "tablename" :
 * "campaign", "id" : "5" } }; var checkproduct = { "AllJSONRequests" : {
 * "token" : "000000", "tablename" : "product", "id" : "2" } }; var checkn = {
 * "AllJSONRequests" : { "token" : "000000", "tablename" : "n", "id" : "25" } };
 * var checkdetail = { "AllJSONRequests" : { "token" : "000000", "operation" :
 * "check", "tablename" : "advertiser", "id" : "2" } };
 * 
 * var checkoffer = { "AllJSONRequests" : { "token" : "000000", "tablename" :
 * "offer", "id" : "15" } };
 
 从JSON字符串转为对象
     var jsObj = {};  
    jsObj.testArray = [1,2,3,4,5];  
    jsObj.name = 'CSS3';  
    jsObj.date = '8 May, 2011';  
    var str = JSON.stringify(jsObj);  
    var str1 = JSON.parse(str);  
    alert(str1);  
 */

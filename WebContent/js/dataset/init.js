var url = "user/initSelect";
var data = [ {
	"Text" : "Mobile Apps",
	"Value" : "1"
}, {
	"Text" : "Mobile wap",
	"Value" : "2"
} ];
//获取值
function getValue(id) {
	var value = $('#' + id).val();//获取选中的value值
	var checkText = $('#' + id).find("option:selected").text();//获取选中的text值
	alert(value);
}
//获取值
function selectAll(obj, id) {
	var btnText = $(obj).text();
	if (btnText == '全选') {
		$(obj).text('反选');
		$('#' + id).selectpicker('selectAll');
	} else {
		$(obj).text('全选');
		$('#' + id).selectpicker('deselectAll');
	}
}
$(function() {
	//初始化下拉列表数据
	//一般下来框
	initSelect('selectpicker', data);
	//搜索下拉框
	initSelect('selectpicker2', data);
	//级联下拉框
	initSelect('country', data);
	$('#country').on('changed.bs.select', function(e) {
		$("#city").empty();
		initSelect('city', data);
	});
	//多选下拉框
	$("#selectpickermul").selectpicker({
		"actionsBox" : true
	});//显示全选/反选按钮
	initSelect('selectpickermul', data);
	//远程获取json数据
	//initSelectByAjax('selectpickerAjax',url);
	//  $('#'+selectId).selectpicker('val','2');//选中value为2的选项
});
$('input[name="datefilter"]').datepicker({
	singleDatePicker : true,
	Time : "2014-05-07",
	startDate : "2014-05-08",
	endDate : "2014-07-08",
	callback : function(i) {
		console.log(i);
	}
});
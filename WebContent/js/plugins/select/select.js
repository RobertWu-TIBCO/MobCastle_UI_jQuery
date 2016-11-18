/**
 * desc:初始化下拉框
 * @author:ljj
 * @param selectId 下拉框Id
 * @param data 填充下拉框的json数组
 */
function  initSelect(selectId,data) {
    $.each(data, function (i, item) {
		$('#'+selectId).append("<option value='" + item.Value + "'>" + item.Text + "</option>");
	});  
   $('#'+selectId).selectpicker('refresh');
};
/**
 * desc:远程获取下拉框的值
 * @author:ljj
 * @param selectId 下拉框Id
 * @param url  获取数据的Url
 */
function  initSelectByAjax(selectId,url) {
	 $.ajax({
         url: url,
         dataType: "json",
         success: function (data) {
        	 data=data.result;
      	   	$.each(data, function (i, item) {
          		$('#'+selectId).append("<option value='" + item.dicKey +"'>" + item.dicValue+ "</option>");
      	   		$('#'+selectId).selectpicker('refresh');
         		}); 
         }
     }); 
   $('#'+selectId).selectpicker('refresh');
};
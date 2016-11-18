function checkIsLegal(){
    var flag=true;
    $("[data-check],[data-required]").each(function () {
        $(this).trigger("change");
        var errorNum=$(".error-info").length;
        if(errorNum>0){
            flag=false;
            return false;
        }else{
            flag=true;
            return true;
        }
    });
    return flag;

}
function addLegalCheck(){
    $("[data-check],[data-required]").on("keydown keyup change blur", function () {
        var data = $(this).data("check");
        var value = $(this).val();
        var required=$(this).data("required");
        if(required&&value.trim()==""){
            addErrorInfo(this,"该项为必填项！");
            return;
        }else{
            removeErrorInfo(this);
            if (data == "url") {
                testError(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/, value, this, "网址格式不正确！");
            } else if (data == "phone") {
                testError(/^[\d*\-*\.*\+*]*$/, value, this, "手机号格式不正确！");
            } else if (data == "number") {//^[\+\-]?\d*?\.?\d*?$
                testError(/^\d+(\.\d{1,2})?$/, value, this, "只能输入数字和小数点,小数点最多两位！");
            }else if(data=='email'){
                testError( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, value, this, "输入的邮箱格式不正确！");
            }
        }
    });
}
function testError(reg,value,e,tip){
    if(value==""||reg.test(value)) {
        removeErrorInfo(e);
    } else{
        addErrorInfo(e, tip);
    }
}
function removeErrorInfo(e) {
    if ($(e).parent().next(".error-info").length > 0) {
        $(e).parent().removeClass("has-error");
        $(e).parent().next(".error-info").remove();
    }
}
function addErrorInfo(e,tip) {
    if ($(e).parent().next(".error-info").length > 0) {
        $(e).parent().next(".error-info").html(tip);
    } else {
        $(e).parent().addClass("has-error");
        $(e).parent().after("<small class='error-info'style='line-height:"+$(e).parent().height()+"px;'>"+tip+"</small>");
    }

}
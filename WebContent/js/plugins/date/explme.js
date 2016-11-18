/**
 * Created by LuLuAny on 2016/4/2.
 */
(function () {
    /*data-disabled*/
    +function ($) {
        'use strict';
        $.fn.disabled = function () {
            var i = $(this);
            i.each(function () {
                var $this = $(this);
                'disabled' in $this.data() ? $this.attr('data-disabled') == 'false' ? $this.attr('disabled', false) : $this.attr('disabled', true) : $this.attr('disabled', true);
            });
        };
    }(jQuery);

    /*data-radio*/

    +function ($) {
        'use strict';
        $.fn.radio = function (o) {
            var i = $(this);
            $.each(o.data, function (j) {
                var t = "<label class=\"radio radio-primary radio-inline\">" + "<input class=\"data-radio\" type=\"radio\" value=\"" + this.value + "\" name=\"" + o.name + "\">" + "<i></i><span>" + this['text_zh'] + "</span></label>";
                i.append(t);
                if (this.value == o.checked) i.children('label:last').find('input').attr('checked', true);
                else j == 0 ? i.children('label:last').find('input').attr('checked', true) : null;
            });
            if ('disabled' in o) o.disabled ? i.find('input').attr('disabled', true) : null;
        };
    }(jQuery);

    /*data-checked*/
    +function ($) {
        'use strict';
        $.fn.checked = function () {
            var i = $(this);
            i.each(function () {
                var $this = $(this);
                'checked' in $this.data() ? $this.attr('data-checked') == 'false' ? $this.attr('checked', false) : $this.attr('checked', true) : $this.attr('checked', true);
            });
        };
    }(jQuery);


    /*data-checkbox*/
    +function ($) {
        'use strict';
        $.fn.checkbox = function (o) {
            console.log(o)
            var i = $(this);
            $.each(o.data, function (j, e) {
                var t = "<label class=\"checkbox checkbox-primary checkbox-inline\"><input type=\"checkbox\" value=\"" + this.value + "\" name=\"" + o.name + "\"><i></i><span>" + this['text_zh'] + "</span></label>";
                i.append(t);
                if ('checked' in o) $.each(o.checked, function () {
                    if (e.value == this) i.children('label:last').find('input').attr('checked', true);
                })
                //$this.parent().append('<i></i><span>' + o.data[j].text_zh + '</span>');
            });
            if ('disabled' in o) o.disabled ? i.find('input').attr('disabled', true) : null;
        };
    }(jQuery);


    /*data-number*/
    +function ($) {
        'use strict';
        $.fn.number = function () {
            var i = $(this);
            i.addClass('touchspin3 form-control');
            i.each(function () {
                var maxNum = 10000000000, $this = $(this), d = $this.attr('data-disabled');
                var t = "<span class='input-group-btn-vertical'><button class='btn btn-white bootstrap-touchspin-up' type='button'><i class='glyphicon glyphicon-chevron-up'></i></button><button class='btn btn-white bootstrap-touchspin-down' type='button'><i class='glyphicon glyphicon-chevron-down'></i></button></span>";
                $this.wrap('<div class="input-group bootstrap-touchspin"></div>');
                $this.after(t);
                $this.on("blur.num.input", function () {
                    var num = parseFloat($this.val()).toFixed(1);
                    !isNaN(parseFloat(num)) ? (num <= maxNum ? $this.val(parseFloat(num).toFixed(1)) : $this.val(parseFloat(maxNum).toFixed(1))) : $this.val('0.0');
                });
                $this.next("span").find(".bootstrap-touchspin-up").on("click.num.add", function () {
                    var num = parseFloat($this.val()).toFixed(1);
                    !isNaN(parseFloat(num)) ? (num < maxNum ? $this.val(parseFloat(++num).toFixed(1)) : null) : $this.val('0.0');
                });
                $this.next("span").find(".bootstrap-touchspin-down").on("click.num.min", function () {
                    var num = parseFloat($this.val()).toFixed(1);
                    !isNaN(parseFloat(num)) ? (num >= 1 ? $this.val(parseFloat(--num).toFixed(1)) : $this.val('0.0')) : $this.val('0.0');
                });
                $.each($this.attr('class').split(' '), function () {
                    String(this) == 'data-disabled' ? d == 'false' ? null : $this.off('.num.input') && $this.next("span").find("button").off('.num') : null;
                });
            });
        }
    }(jQuery);

    /*datapicker*/
    +function ($) {
        'use strict';
        $.fn.datepicker = function (o) {
            var $this = $(this);
            $this.daterangepicker({
                singleDatePicker: o.singleDatePicker,
                timePicker: true,
                startDate: o.singleDatePicker ? o.Time : o.startDate ? o.startDate : new Date(),
                endDate: o.endDate ? o.endDate : new Date(),
                locale: {
                    daysOfWeek: ["七", "一", "二", "三", "四", "五", "六"],
                    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    cancelLabel: '清除'
                },
                ranges: {
                    'Today': [moment(), moment()]
                }
            });
            $this.on('apply.daterangepicker', function (ev, picker) {
                o.singleDatePicker ? $(this).val(picker.startDate.format('YYYY-MM-DD')) : $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
                o.callback(o.singleDatePicker ? {time: picker.startDate.format('YYYY-MM-DD')} : {
                    start: picker.startDate.format('YYYY-MM-DD'),
                    end: picker.endDate.format('YYYY-MM-DD')
                });
            });
            $this.on('cancel.daterangepicker', function () {
                o.callback('');
                $(this).val('');
            });
            $(".calendar-time").hide();
        };
    }(jQuery);
    //弹出框
    +(function($){
    'use strict';
    $.fn.dialog=function(settings){
        var defaults={
            dialogID:"",
            dialogInfo:"确定进行此操作吗？",
            modalClass:"",
            btnOk:"",
            btnCancel:"",
            backdrop:true,
            keyboard:true,
            fade:true
        }
        var settings = $.extend(defaults, settings);
        settings.element =$(this);
        var dialog="<div class='modal' id=" +
            settings.dialogID +
            "><div class='modal-dialog'> <div class='modal-content'><div class='modal-header'> <a class='close' data-dismiss='modal'>×</a> </div> " +
            "<div class='modal-body'> <p>" +
            settings.dialogInfo+
            "</p> </div><div class='modal-footer'> <a href='#' class='btn btn-blue' data-dismiss='modal'>" + settings.btnOk+
            "</a><a href='#' class='btn btn-default' data-dismiss='modal'>" +settings.btnCancel+
            "</a> </div> </div> </div> </div>";

        $(this).after(dialog);
        $(settings.element).each(function(index,e){
                console.log(this);
                var backdrop = {'true': true, 'false': false}[settings.backdrop];
                var  keyboard = {'true': true, 'false': false}[settings.keyboard];
                var fade= {'true': true, 'false': false}[settings.fade];
                var dialogID=settings.dialogID;
                $(e).on("click", function () {
                    if ($("#" + dialogID)) {
                        $("#" + dialogID).modal({
                            backdrop: backdrop,
                            keyboard: keyboard,
                            show: true
                        });
                        $("#" + dialogID).attr('tabindex', "-1").addClass(settings.modalClass);
                        if(fade)
                            $("#" + dialogID).addClass("fade")
                    }
                });
            }
        )
    }
})(jQuery);

})(function () {
    if (typeof jQuery === 'undefined') {
        throw new Error('JavaScript isn\'t requires jQuery');
    }
}());
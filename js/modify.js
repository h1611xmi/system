/**
 * Created by Administrator on 2017/7/22.
 */
$(function () {
    $('.fa-eye-slash').click(function () {
        $('.fa-eye-slash').hide();
        $('.fa-eye').show();
        if($('.passw[type = password]')){
            $('.passw').attr('type','text');
        }
    })
    $('.fa-eye').click(function () {
        $('.fa-eye-slash').show();
        $('.fa-eye').hide();
        if($('.passw[type = text]')){
            $('.passw').attr('type','password');
        }
    })
    $('#determine a').click(function () {
        $('.box2').css('display','block');
    })
    $('.box2').click(function () {
        $('.box2').css('display','none');
    })
})
var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.value="发送验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
        settime(obj) }
    ,1000)
}

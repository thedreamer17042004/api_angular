// menu-pin top//
$(function () {
    $(window).scroll(function () { 
        var vitribody = $('html, body').scrollTop();
        // var vitrigiaodien = $('.menu-bar').offset().top;
       
        if(vitribody >= 100) {
			// doan nay addclass
			// $('.menu-bar').addClass('animate__fadeInDown');
			$('.menu-bar').addClass('pin-menu');

		}else{
			$('.menu-bar').removeClass('pin-menu');
            console.log('hêllo')

        }
    });
});

// // login-form
// var loginForm = document.forms.form_login;
// var email = loginForm.email;
// var password = loginForm.password;
// console.log(loginForm);
// var pttEmail = /^[a-z0-9!#$%^.-]{1,20}@[a-z.]{1,20}$/;
// var pttPassword = /^[a-zA-Z0-9.!@#$%^&*()/]{1,30}$/;
// loginForm.onsubmit = () => {
//     if(email.value == ''){
//         alert('Bạn chưa nhập email!')
//         return false;
//     }
//     else if(!pttEmail.test(email.value)){
//         alert('Vui lòng nhập email có @!');
//         $('.email-class').addClass('error');
//         return false;
//     }

//     // password
//     if(password.value == ''){
//         alert('Bạn chưa nhập password!')
//         return false;
//     }
//     else if(!pttPassword.test(password.value)){
//         alert('Vui lòng nhập password đầy đủ');
//         $('.password-class').addClass('error');
//         return false;
//     }

//     alert('Đăng nhập thành công');
// }



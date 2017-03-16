$(document).ready(function() {

$('input[name="name"]').focusout(function(){
function validName(){

    var name = $('input[name="name"]').val();
    if (name.match(/[0-9]/g) || name  === "") {
        $('i:eq(0).fa-check').css("visibility", "hidden");
        $('i:eq(1).fa-times').css("visibility", "visible");
        $('input[name="name"]').removeClass("success");
        $('input[name="name"]').addClass("error");
        
    }else{
        $('i:eq(1).fa-times').css("visibility", "hidden");
        $('i:eq(0).fa-check').css("visibility", "visible");
        $('input[name="name"]').addClass("success");   
    }
}
validName();


});

 $('input[name="surname"]').focusout(function(){  
function validSurname(){
   
    var surname = $('input[name="surname"]').val()
     if (surname.match(/[0-9]/g) || surname  === "") {
        $('i:eq(2).fa-check').css("visibility", "hidden");
        $('i:eq(3).fa-times').css("visibility", "visible");
        $('input[name="surname"]').removeClass("success");
        $('input[name="surname"]').addClass("error");
        
        }
         else{
            $('i:eq(3).fa-times').css("visibility", "hidden");
            $('i:eq(2).fa-check').css("visibility", "visible");
            $('input[name="surname"]').addClass("success");
           
         }
     
}
 validSurname();   
});



$('input[name="position"]').focusout(function(){  
function validPosition(){
    var position = $('input[name="position"]').val()
     if (position.match(/[0-9]/g) || position.length<5 || position  === "") {

         $('i:eq(16).fa-check').css("visibility", "hidden");
         $('i:eq(17).fa-times').css("visibility", "visible");
         $('input[name="position"]').removeClass("success");
         $('input[name="position"]').addClass("error");
         
        }
         else{
            $('i:eq(17).fa-times').css("visibility", "hidden");
            $('i:eq(16).fa-check').css("visibility", "visible");
            $('input[name="position"]').addClass("success");
          
         }
     
}
 validPosition();   
});

$('input[name="email"]').focusout(function(){  
function validEmail(){
    var arr = ["yahoo.com", "google.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com",
               "live.com", "comcast.net", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk",
               "facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "mail.com",
               "mail.ru", "inbox.ru", "list.ru", "bk.ru", "rambler.ru", "lenta.ru", "myrambler.ru",
               "autorambler.ru", "ro.ru", "r0.ru", "yandex.ru", "ya.ru", "яндекс.рф", "habrahabr.ru", "ua.com", "ui.com"];
    var email = $('input[name="email"]').val();
    var domain = email.split("@");
     if (!_.findWhere(email, '@') || email  === "")  {
        $('i:eq(6).fa-check').css("visibility", "hidden");
        $('i:eq(7).fa-times').css("visibility", "visible");   
        $('input[name="email"]').removeClass("success");
        $('input[name="email"]').addClass("error");
        
        }else if (!email.match(/([a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6})/g)) {
            $('i:eq(6).fa-check').css("visibility", "hidden");
            $('i:eq(7).fa-times').css("visibility", "visible"); 
            $('input[name="email"]').removeClass("success");
            $('input[name="email"]').addClass("error");
            
            }
            else if (!arr.some(e => e == domain[1])) {
                $('i:eq(6).fa-check').css("visibility", "hidden");
                $('i:eq(7).fa-times').css("visibility", "visible"); 
                $('input[name="email"]').removeClass("success");
                $('input[name="email"]').addClass("error");
                 

                   }
                   
        else{

            $('i:eq(7).fa-times').css("visibility", "hidden");
            $('i:eq(6).fa-check').css("visibility", "visible");
            $('input[name="email"]').addClass("success");
            
         }
     
}
 validEmail();   
});


$('input[name="login"]').focusout(function(){  
function validLogin(){
    var login = $('input[name="login"]').val()
     if (login.match(/[!-*@#&\/]/g) || login.length<5 || login  === "") {
         $('i:eq(4).fa-check').css("visibility", "hidden");
          $('i:eq(5).fa-times').css("visibility", "visible");
          $('input[name="login"]').removeClass("success");
          $('input[name="login"]').addClass("error");
          
        }
         else{
            $('i:eq(5).fa-times').css("visibility", "hidden");
            $('i:eq(4).fa-check').css("visibility", "visible");
            $('input[name="login"]').addClass("success");
            
         }
     
}
 validLogin();   
});


$('input[name="password"]').focusout(function(){  
function validPassword(){
    var password = $('input[name="password"]').val()
     if (password.match(/[0-9!-*@$%+=-_()#&\/]/g) || password.length<5 || password  === "") {
         $('i:eq(8).fa-check').css("visibility", "hidden");
          $('i:eq(9).fa-times').css("visibility", "visible");
          $('input[name="password"]').removeClass("success");
          $('input[name="password"]').addClass("error");
        }
         else{
            $('i:eq(9).fa-times').css("visibility", "hidden");
            $('i:eq(8).fa-check').css("visibility", "visible");
            $('input[name="password"]').addClass("success");
            
         }
}
 validPassword();   
});

$('input[name="confirm"]').focusout(function(){  
function validConfirm(){
    var password = $('input[name="password"]').val()
    var confirm = $('input[name="confirm"]').val()
     if (password !== confirm || confirm.length<5 || confirm == "") {
         $('i:eq(10).fa-check').css("visibility", "hidden");
          $('i:eq(11).fa-times').css("visibility", "visible");
          $('input[name="confirm"]').removeClass("success");
          $('input[name="confirm"]').addClass("error");
          p
        }
         else{
            $('i:eq(11).fa-times').css("visibility", "hidden");
            $('i:eq(10).fa-check').css("visibility", "visible");
            $('input[name="confirm"]').addClass("success");
            
         }
    
}
 validConfirm();   
});


$('input[name="tel"]').focusout(function(){  
function validTel(){
    var tel = $('input[name="tel"]').val()
     if (tel.match(/[!-*@$%+=-_()#&\/]/g) || tel.length !== 10 || tel  === "") {
         $('i:eq(12).fa-check').css("visibility", "hidden");
          $('i:eq(13).fa-times').css("visibility", "visible");
          $('input[name="tel"]').removeClass("success");
          $('input[name="tel"]').addClass("error");
        }
         else{
            $('i:eq(13).fa-times').css("visibility", "hidden");
            $('i:eq(12).fa-check').css("visibility", "visible");
            $('input[name="tel"]').addClass("success");
            
         }
  
}
 validTel();   
});

$('input[name="card"]').focusout(function(){  
function validCard(){
    var card = $('input[name="card"]').val()
     if (card.match(/[!-*@$%+=-_()#&\/]/g) || card.length !== 16 || card  === "") {
          $('i:eq(20).fa-check').css("visibility", "hidden");
          $('i:eq(21).fa-times').css("visibility", "visible");
          $('input[name="card"]').removeClass("success");
          $('input[name="card"]').addClass("error");
        }
         else{
            $('i:eq(21).fa-times').css("visibility", "hidden");
            $('i:eq(20).fa-check').css("visibility", "visible");
            $('input[name="card"]').addClass("success");  
         }
}
 validCard();   
});

$('input[name="date"]').focusout(function(){  
function validDate(){
    var date = $('input[name="date"]').val()
     if (!date.match(/^[0-1]{1}[0-2]{1}\/[1-9]{1}[7-9]{1}$/) ||  date  === ""){
          $('i:eq(22).fa-check').css("visibility", "hidden");
          $('input[name="date"]').removeClass("success");
          $('input[name="date"]').addClass("error");
        }
         else{
            $('i:eq(23).fa-times').css("visibility", "hidden");
            $('i:eq(22).fa-check').css("visibility", "visible");
            $('input[name="date"]').addClass("success");
         }
     
}
 validDate();   
});

$('input[name="cvv"]').focusout(function(){  
function validCvv(){

    var cvv = $('input[name="cvv"]').val()
     if (!cvv.match(/^[0-9]{3}$/) ||  cvv  === ""){
          $('input[name="cvv"]').removeClass("success");
          $('input[name="cvv"]').addClass("error");
        }
         else{
            $('input[name="cvv"]').addClass("success");
            
         }
}
 validCvv();   
});

$('input[name="site"]').focusout(function(){  
function validSite(){
    var site = $('input[name="site"]').val()
     if (site  === ""){
          $('i:eq(14).fa-check').css("visibility", "hidden");
          $('i:eq(15).fa-times').css("visibility", "visible");
          $('input[name="site"]').removeClass("success");
          $('input[name="site"]').addClass("error");
        }
         else{
            $('i:eq(15).fa-times').css("visibility", "hidden");
            $('i:eq(14).fa-check').css("visibility", "visible");
            $('input[name="site"]').addClass("success");
         }
    
}
 validSite();   
});

$('input[name="company"]').focusout(function(){  
function validCompany(){
    var company = $('input[name="company"]').val()
     if (company  === ""){
          $('i:eq(18).fa-check').css("visibility", "hidden");
          $('i:eq(19).fa-times').css("visibility", "visible");
          $('input[name="company"]').removeClass("success");
          $('input[name="company"]').addClass("error");
         
        }
         else{
            $('i:eq(19).fa-times').css("visibility", "hidden");
            $('i:eq(18).fa-check').css("visibility", "visible");
            $('input[name="company"]').addClass("success");
            
         }
    
}
 validCompany();   
});

});










/*function validDate() {
  var isValid = true;
  var date = $("[name = 'date']").val();
  var valDate = /^([0-3]{1}[0-1]{1})|([0-2]{1}[0-9]{1})\/([1]{1}[0-2]{1})|([0]{1}[1-9]{1})\/\d{4}$/g;

  if (!date.match(valDate)) {
    alert('Date should be in format DD/MM/YYYY');
    isValid = false;
  }
   isValid;
}


function validIP() {
    var isValid = true;
    var ip = $('[name="ip"]').val();
    var valIP = /^\d+\.\d+\.\d+\.\d+$/g;
    if(ip.search(valIP) === -1) {
        alert('IP should be in format 0.0.0.0');
    }
     isValid;
}*/

/*$('#submit').click(function (event) {
    event.preventDefault();

     if(nameValid&&surValid&&posValid&&emailValid){

        alert('Done');
     }     
     else{

        alert('Write all textarea');
      
     }
    });
});
*/
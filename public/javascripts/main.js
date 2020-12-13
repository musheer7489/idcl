function validateForm() {
  let email = document.forms["regForm"]["email"].value;
  var confirmemail = document.forms["regForm"]["confirmemail"].value;
  if (email !== confirmemail) {
      alert("Email ID And Cofirm Email Id Not Matched");
      return false;
  }

  let password = document.forms["regForm"]["password"].value;
  var confirmpassword = document.forms["regForm"]["confirmpassword"].value;
  if (password !== confirmpassword) {
      alert("Password And Cofirm Password Not Matched");
      return false;
  }
}

$(document).ready(function(){
  $("#exampleModalCenter").modal('show');
});

function readPhoto(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
          $('#photoView').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
function readSign(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
          $('#signatureView').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#photo").change(function(){
  readPhoto(this);
  if(this.files[0].size > 51200){
    alert("Photo Size Must less Than 50KB");
    this.value = "";
  }
});
$("#signature").change(function(){
  readSign(this);
  if(this.files[0].size > 20480){
    alert("Signature Size Must less Than 20KB");
    this.value = "";
  }
});

var pwd = document.getElementById('password');
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
pwd.onfocus = function() {
  document.getElementById("pwdmessage").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
pwd.onblur = function() {
  document.getElementById("pwdmessage").style.display = "none";
}

// When the user starts to type something inside the password field
pwd.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(pwd.value.match(lowerCaseLetters)) {
    letter.classList.remove("pwdinvalid");
    letter.classList.add("pwdvalid");
  } else {
    letter.classList.remove("pwdvalid");
    letter.classList.add("pwdinvalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(pwd.value.match(upperCaseLetters)) {
    capital.classList.remove("pwdinvalid");
    capital.classList.add("pwdvalid");
  } else {
    capital.classList.remove("pwdvalid");
    capital.classList.add("pwdinvalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(pwd.value.match(numbers)) {
    number.classList.remove("pwdinvalid");
    number.classList.add("pwdvalid");
  } else {
    number.classList.remove("pwdvalid");
    number.classList.add("pwdinvalid");
  }

  // Validate length
  if(pwd.value.length >= 8) {
    length.classList.remove("pwdinvalid");
    length.classList.add("pwdvalid");
  } else {
    length.classList.remove("pwdvalid");
    length.classList.add("pwdinvalid");
  }
}

// ==================
// =====Captcha=====
// =================

onload = function Captcha(){
  var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
      '0','1','2','3','4','5','6','7','8','9');
  var i;
  for (i=0;i<6;i++){
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
      var f = alpha[Math.floor(Math.random() * alpha.length)];
      var g = alpha[Math.floor(Math.random() * alpha.length)];
                   }
      var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
      document.getElementById("mainCaptcha").innerHTML = code
  document.getElementById("mainCaptcha").value = code
    }
function CaptchaReload(){
  var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
      '0','1','2','3','4','5','6','7','8','9');
  var i;
  for (i=0;i<6;i++){
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
      var f = alpha[Math.floor(Math.random() * alpha.length)];
      var g = alpha[Math.floor(Math.random() * alpha.length)];
                   }
      var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
      document.getElementById("mainCaptcha").innerHTML = code
  document.getElementById("mainCaptcha").value = code
    }
function ValidCaptcha(){
  var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
  var string2 =         removeSpaces(document.getElementById('txtInput').value);
  if (string1 == string2){
         return true;
  }else{
       alert('Invalid Captch');        
       return false;
       }
}
function removeSpaces(string){
  return string.split(' ').join('');
}

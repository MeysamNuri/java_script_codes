AOS.init();
// ================== smooth scrolling ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ======================= back to top ======================
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && screen.width == 1366) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ==================== regex of co-operation input =======================
const invalidTxt = document.getElementById("invalid-txt")

function handleCheckPhoneNumber(value){
  const input = document.getElementById("phone-input")

  const regex = new RegExp(/^(\+98|0)?9\d{9}$/)
  if(value !== ''){
    if(regex.test(value)){
      invalidTxt.style.display = 'none'
      input.style.border = 'none'
    }else{
      invalidTxt.style.display = 'block'
      input.style.border = '1px solid red'
    }
  }
}

// ========== in file input ===> show file name ============
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

function showSnackbar(text){
  var x = document.getElementById("snackbar");
  x.innerHTML= text;
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// ========== phone number sent to server ============
var phone_form = document.getElementById('submit-form');
$(document).on('submit', '#submit-form', function(e){
  e.preventDefault();

  var phoneNumber = document.getElementById('phone-input').value;
  // resultElement.innerHTML = '';
  
  if(phoneNumber == ''){
    invalidTxt.style.display = 'block'
    return;
  }else{
    invalidTxt.style.display = 'none'
  }
  
  axios.post('https://siteback.daapapp.com/collaborate_us', { mobile: phoneNumber })
  .then((response) => {
    showSnackbar('شماره تلفن با موفقیت ثبت شد')
  })
  .catch(function (error) {
    generateErrorHTMLOutput(error);
  });

  phone_form.reset();
});

// ========== email sent to server ============
var email_form = document.getElementById('send_email')
$(document).on('submit', '#send_email', function(e){
  e.preventDefault();
  var email = document.getElementById('email-input').value;
  
  if(email == ''){
    showSnackbar('ایمیل نباید خالی باشد')
    return;
  }

  axios.post('https://siteback.daapapp.com/register_in_newsletters', { email: email })
  .then((response) => {
    var msg = JSON.stringify(response.data.msg)
    var txt = '"you registered before in system"'
    
    msg == txt ? showSnackbar('آدرس ایمیل قبلا ثبت شده است') : showSnackbar('آدرس ایمیل با موفقیت ثبت شد')
  
  })
  .catch(function (error) {
     generateErrorHTMLOutput(error);
  });
  
  email_form.reset();
});

function generateErrorHTMLOutput(error) {
  showSnackbar('server error')
}

$(function() {
  var $tabButtonItem = $('#tab-button li'),
      $tabSelect = $('#tab-select'),
      $tabContents = $('.tab-contents'),
      activeClass = 'is-active';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').hide();

  $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
  });

  $tabSelect.on('change', function() {
    var target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
  });
});
// function checkEmail(value){
//   const regexp = new RegExp("^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:'(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\'|\\\\)*'|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:'(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\'|\\\\)+'))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$")
//   console.log(value);
  
//   if( regexp.test(value) ){
//     console.log('yes');
//   }else{
//     console.log('no');
    
//   }
  
// }
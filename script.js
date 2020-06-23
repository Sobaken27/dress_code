$(document).ready(function () {
	$("#main-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
      $('.menu-trigger').on('click', function() {
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });
    $("#sendMail").on("click", function() {
	let name = $("#name").val();
	let email = $("#email").val();
	let subject = $("#subject").val();
	let message = $("#message").val();

    if(name == "") {
        alert("Введите ваше имя.");
    	return false;
    } else if (email == "") {
    	alert("Введите ваш e-mail.");
    	return false;
    } else if (subject == "") {
    	alert("Введите тему сообщения.");
    	return false;
    } else if (message == "") {
    	alert("Введите сообщение.");
    	return false;
    } 
    
$.ajax({
url: '../ajax/mail.php',
type: 'POST',
cache: false,
data: { 'name': name, 'email': email, 'subject': subject, 'message': message },
dataType: 'html',
beforeSend: function() {
    $("sendMail").prop("disabled", true);
},
success: function() {
    alert('Ваше сообщение отправлено');
    $("#sendPoll").prop("disabled", false);
}
});
});
});
function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("29 April 2024 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}
	setInterval(function() { makeTimer(); }, 1000);



$(document).ready(function () {
    $('#phone').mask('+38(000)000-00-00');

});



var button = document.querySelector("#btn-send");
var input = document.querySelector('input[type=text]');
var input2 = document.querySelector('input[type=tel]');
button.addEventListener("click", function () {
    input.value = "";
    input2.value = "";
    alert('Данные успешно отправлены');
});


$('.open-eye').on('click',function(){
    if($('#pwd[type=password]').length){
$('#pwd').attr("type","text");
$('.open-eye').css("display", "none");
$('.close-eye').css("display", "block");
    }
    else{
        $('#pwd').attr("type","password");
        $('.open-eye').css("display", "block");
$('.close-eye').css("display", "none");
    }
});
$('.close-eye').on('click',function(){
    if($('#pwd[type=text]').length){
$('#pwd').attr("type","password");
$('.close-eye').css("display", "none");
$('.open-eye').css("display", "block");
    }
    else{
        $('#pwd').attr("type","text");
        $('.open-eye').css("display", "none");
$('.close-eye').css("display", "block");
    }
});
$(document).ready(function() {
	$('select').niceSelect();
  });

// var openeye = document.getElementsByClassName('.open-eye');
// var closeneye = document.getElementsByClassName('.close-eye');

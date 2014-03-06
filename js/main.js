var counter = 1;
var coming; 

$(document).ready(function() {

	$('#add').click(function() { 
		 if(counter<5){
		 	$('#formcontent').append('<div class="inputcontent"><h3 class="formtext">Full Name</h3><input type="text" id="firstname'+counter+'" name="firstname'+counter+'" class="input"></div><div class="inputcontent inputright"><h3 class="formtext extra-left">Email</h3> <input type="text" id="email'+counter+'" name="email'+counter+'" class="input extra-left"></div>');
		 	counter++;
		 }
	});



	$('#absolutely').on('click', function () {

		if($('#firstname').val()!="" && $('#email').val()!="" ){

			coming = "yes"; 
	   		$('#formbody').trigger('submit');
	   		$('.couldhide').addClass('hidden');
	     	$('#thanks-text').removeClass('hidden');
	     	$('.section3').css({'min-height':'385px'});
	    }else{
	    	$('.replace').html('<span style="color:#fff">Oops! Looks like the form is not complete.</span>')
	    }

	});


	$('#no').on('click', function () {
		if($('#firstname').val()!="" && $('#email').val()!="" ){
			coming = "no"; 
	   		$('#formbody').trigger('submit');
	   		$('.couldhide').addClass('hidden');
	   		$('#aww-text').removeClass('hidden');
	     	$('.section3').css({'min-height':'385px'});
	    }else{
	    	$('.replace').html('<span style="color:#fff">Oops! Looks like the form is not complete.</span>')
	    }
	});
	
	

	$('#formbody').submit(function(){
	    		
		    var url = "emails.php"; // the script where you handle the form input.
		    
		    var names = "";

		    switch(counter)
			{
			case 1:
				names = $('#firstname').val()+", "+$('#email').val();
				break;
			case 2:
				names = $('#firstname').val()+", "+$('#email').val()+"\n"+$('#firstname1').val()+", "+$('#email1').val();
				break;
			case 3:
				names = $('#firstname').val()+", "+$('#email').val()+"\n"+$('#firstname1').val()+", "+$('#email1').val()+"\n"+$('#firstname2').val()+", "+$('#email2').val();
				break;
			case 4:
				names = $('#firstname').val()+", "+$('#email').val()+"\n"+$('#firstname1').val()+", "+$('#email1').val()+"\n"+$('#firstname2').val()+", "+$('#email2').val()+"\n"+$('#firstname3').val()+", "+$('#email3').val();
				break;
			case 5:
				names = $('#firstname').val()+", "+$('#email').val()+"\n"+$('#firstname1').val()+", "+$('#email1').val()+"\n"+$('#firstname2').val()+", "+$('#email2').val()+"\n"+$('#firstname3').val()+", "+$('#email3').val()+"\n"+$('#firstname4').val()+", "+$('#email4').val();;
				break;
			}

		    $.ajax({
		           type: "POST",
		           url: url,
		           data: {
		        		'names': names,
		          		'coming': coming,
		          		'counter': counter
		    			}
		     });
		    return false; // avoid to execute the actual submit of the form.

	});

	

});


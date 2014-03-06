<?php


	$counter = $_POST["counter"];
	$coming = htmlspecialchars($_POST["coming"]);
	$names = $_POST["names"];
	$myFile = "error.txt";

	$mes = "";
	$guests = "guest";

	if($coming == "yes"){
		$mes = "will be attending your wedding!";
		$myFile = "yes.txt";

	}else if ($coming == "no"){
		$mes = "will not be attending your wedding.";
		$myFile = "no.txt";

	}

	if($counter>1){
		$guests = "guests";
	}

	$to = "email@email.com";
	$subject = "Guests";
	$message = "The following \n".$guests."\n".$mes."\n".$names;
	$from = "server@mysite.com";
	$config = "localhost";
	$headers = "From:" . $from;
	mail($to,$subject,$message,$headers,$config);


	$fh = fopen($myFile, 'a') or die("can't open file");
	fwrite($fh, $stringData);
	$stringData = "\n".date('l jS F Y')."\n  ----------  \n".$names."\n  ----------  \n";
	fwrite($fh, $stringData);
	fclose($fh);





?>
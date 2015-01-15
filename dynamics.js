//Hecho por Jonathan Soto: theja29@hotmail.com
lastIdSelected = '';

function show( filename, id ) {
	maximized = document.getElementById( 'maximized' );
//Hecho por Jonathan Soto: theja29@hotmail.com
	maximized.innerHTML = '<img src="imgs/' + filename + '" class="imgMaximized decorated">';
	if( lastIdSelected != '' ) document.getElementById( lastIdSelected ).className = 'miniature';//Hecho por Jonathan Soto: theja29@hotmail.com
	document.getElementById( id ).className = 'miniature selected';
	lastIdSelected = id;
//Hecho por Jonathan Soto: theja29@hotmail.com
}

//Hecho por Jonathan Soto: theja29@hotmail.com
function sendMail() {
	email = oForm.elements["email"].value;
	asunto = oForm.elements["asunto"].value;
	mensaje = oForm.elements["mensaje"].value;
	
	ajax( 'enviarMsj.php?email='+email+'&asunto='+asunto+'&msj='+mensaje, function( resp ) {
		alert( resp );
	});
}

//Hecho por Jonathan Soto: theja29@hotmail.com
function ajax( url, callback ){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
//Hecho por Jonathan Soto: theja29@hotmail.com
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open( 'GET', url, true );//Hecho por Jonathan Soto: theja29@hotmail.com
    xmlhttp.send();
}
//Hecho por Jonathan Soto: theja29@hotmail.com
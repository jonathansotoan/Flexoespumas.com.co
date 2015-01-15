<?php
	if( mail( "flexoesp@flexoespumas.com.co", $_GET[ 'asunto' ], $_GET[ 'msj' ], "From: ".$_GET[ 'email' ] ) )
		echo "El mensaje ha sido enviado exitosamente, pronto nos pondremos en contacto con usted.";
	else
		echo "El envío del mensaje ha fallo, intentelo de nuevo";
?>
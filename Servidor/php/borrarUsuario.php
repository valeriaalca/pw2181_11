<?php
include 'conexiones.php';
function borrarUsuario()
{
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	
	//Conectarnos al servidor de BD.
	$con = conecta();
	//$consulta = "select * from usuarios where usuario= '".$usuario."' limit 1";
	//echo $consulta;
	$consulta= sprintf ("delete  from usuarios where usuario = %s limit 1", $usuario);
	mysqli_query($con,$consulta);
	//preguntamos si se hizo la actualizacion o inserccion
	if(mysqli_affected_rows($con)>0){//insert o update- delete
		$respuesta	= true; 
	}
	$salidaJSON = array('respuesta' => $respuesta);					
	//var_dump(salidaJSON);
	print json_encode($salidaJSON);
}
$opc = $_POST["opc"];
switch ($opc) {
	case 'borrarUsuario':
		borrarUsuario();
		break;
	
	default:
		# code...
		break;
}
?>
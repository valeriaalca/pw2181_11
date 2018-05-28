<?php
include 'conexiones.php';
function guardarUsuario()
{
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$nombre = GetSQLValueString($_POST["nombre"],"text");
	$clave = GetSQLValueString(md5($_POST["clave"]),"text");
	//Conectarnos al servidor de BD.
	$con = conecta();
	//$consulta = "select * from usuarios where usuario= '".$usuario."' limit 1";
	//echo $consulta;
	$consulta= sprintf ("select usuario from usuarios where usuario = %s limit 1", $usuario);
	$resConsulta = mysqli_query($con,$consulta);
	$consultaguarda="";
	if(mysqli_num_rows($resConsulta) > 0){
		$consultaguarda=sprintf("update usuarios set nombre=%s,clave=%s where usuario =%s",$nombre,$clave,$usuario);
	}else{
		$consultaguarda=sprintf("insert into usuarios values(default,%s,%s,%s)", $usuario,$nombre,$clave);
	}
	mysqli_query($con,$consultaguarda);
	//preguntamos si se hizo la actualizacion o inserccion
	if(mysqli_affected_rows($con)>0){//insert o update
		$respuesta	= true; 
	}
	$salidaJSON = array('respuesta' => $respuesta);
						
	//var_dump(salidaJSON);
	print json_encode($salidaJSON);
}
$opc = $_POST["opc"];
switch ($opc) {
	case 'guardarUsuario':
		guardarUsuario();
		break;
	
	default:
		# code...
		break;
}
?>
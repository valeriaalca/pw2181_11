var inicioApp = function()
{
	var Aceptar = function()
	{
		event.preventDefault();
		var usuario =$("#txtUsuario").val();
		var clave =$("#txtClave").val();
		var parametros = "opc=validaentrada"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&numero="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/validaentrada.php",
			data: parametros,
			success: function(response)
			{
				if(response.respuesta == true)
				{
					$("#secInicio").hide("slow");
					//alert("Bienvenido");
					$("#frmUsuarios").show("slow");
					//posiciona el cursor en el cuadro de texto.
					$("#txtNombreUsuario").focus();
				}
				else
				{
					alert("Usuario o contraseña incorrecta(s)")
				}
			},
			error: function(xhr,ajaxOptions,throenError)
			{

			}
		});
	}
		var buscaUsuario = function(){
			var usuario = $("#txtNombreUsuario").val();
			var parametros="opc=buscaUsuario"+
							"&usuario="+usuario+
							"%aleatorio="+Math.random();
			if(usuario != ""){
				$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/buscaUsuario.php",
			data: parametros,
			success: function(response)
			{
				if(response.respuesta == true){
					$("#txtNombre").val(response.nombre);
					$("txtClaveUsuario").val(respo.clave);
				}else{
					$("#txtNombre").focus();
				}
			},
			error: function(xhr,ajaxOptions,throenError)
			{

			}
		});
			}
		}
		var teclaNombreUsuario = function(tecla){
			if(tecla.which == 13){
				buscaUsuario();
			}
		}

	
	$("#btnAceptar").on("click",Aceptar);
	$("frmUsuarios").hide();
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
}
$(document).ready(inicioApp);

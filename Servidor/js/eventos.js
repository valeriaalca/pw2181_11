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
							"&aleatorio="+Math.random();
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
					$("#txtClaveUsuario").val(response.clave);
				}else{
					$("#txtNombre").focus();
					$("#txtNombre").val("");
					$("#txtClaveUsuario").val("");
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
		var Guardar = function(){
			var usuario =$("#txtUsuario").val();
			var nombre =$("#txtNombre").val();
			var clave =$("#txtClaveUsuario").val();
			var parametros = "opc=guardarUsuario"+"&usuario="+usuario+"&nombre="+nombre+"&clave="+clave+"&aleatorio="+Math.random();
			if(usuario!="" && nombre !="" && clave!=""){

			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/guardarUsuario.php",
			data: parametros,
			success: function(response)
			{
				if(response.respuesta == true){
					alert("cambios guardados con exito");
					$("#frmUsuarios > input").val("");
					$("#txtNombreUsuario").focus();
				}else{
					alert("Ocurrio un error, intente mas tarde");
				}
			},
			error: function(xhr,ajaxOptions,throenError)
			{

			}
		});
			}else{
				alert("Llene todos los datos");
			}

		}
		var Borrar = function() {
			var usuario = $("#txtUsuario").val();
			var pregunta = prompt("Seguro de borrar"+usuario+"? (si/no)", "No");
			var parametros = "opc=borrarUsuario"+
							"&usuario="+usuario+
							"&aleatorio="+Math.random();

	if (pregunta!= null && pregunta == "si") {
    			//Aqui va el ajax...:
    			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/borrarUsuario.php",
			data: parametros,
			success: function(response)
			{
				if(response.respuesta == true){
					alert("Usuario borrado");
					$("#frmUsuarios > input").val("");
					$("#txtNombreUsuario").focus();
				}else{
					alert("Ocurrio un error, intente mas tarde");
				}
			},
			error: function(xhr,ajaxOptions,throenError)
			{

			}
		});
			}
		}
	
	$("#btnAceptar").on("click",Aceptar);
	$("frmUsuarios").hide();
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#btnGuardar").on("click", Guardar);
	$("#btnBorrar").on("click", Borrar);

}
$(document).ready(inicioApp);



var $ = require('jquery');
var inicia = function()

{
	var nuevo = function ()
	{
		//JSON=JavaScript Object Notation
		//alert("clic");
		$.ajax({
  		url: 'https://randomuser.me/api/',
  		dataType: 'json',
  		success: function(data) 
  		{
  			$("#nombre").html(data.results[0].name.first+" "+data.results[0].name.last);
  			$("#foto").attr( "src", data.results[0].picture.large);
  			


    	//console.log(data);
  }
});
    
	}
	$("#btnNuevo").on("click", nuevo)
	//alert("Pagina Cargada");
}



$(document).ready(inicia);
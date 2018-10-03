// validacion con JQuery

var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
var exprPass = /((?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*(\s|\\|\/|!|"|ú|\$|%|&|\(|\)|=|\?|¨|\||@|#|ª|€|\^|`|\[|\]|\+|\*|ù|ï|\{|\}|\-|_|\.|:|,|;|>|<)).*$)/;

$(document).ready(function()
{

	$("#submit").click(function(){

		var nombre = $("#username").val();
		var correo = $("#email").val();
		var pass = $("#pass").val();
		var repass = $("#repass").val();

		if ( nombre.length < '6' || nombre == "" )
			{
				$(".errores").fadeOut(0);		// lo que hace es ocultar todos los divs de errores para luego mostrar el error correspondiente

				if ( nombre == "" )
					$("#mensaje1").fadeIn();

				else
					$("#mensaje1-1").fadeIn();
				
				return false;
			}
	
		else
			{
				$(".errores").fadeOut(0);

				if ( correo == "" || correo.length < '6' || !expr.test(correo) )
					{
						if ( correo == "" )
							$("#mensaje2").fadeIn();

						else 
							$("#mensaje2-1").fadeIn();

						return false;	

					}		
			
				else
					{
						$(".errores").fadeOut(0);

						if ( pass == "" || pass.length < '6' || !exprPass.test(pass) )
							{
								if ( pass == "" )
									$("#mensaje3").fadeIn();

								else
									{
										if ( pass.length < '6' )
											$("#mensaje3-1").fadeIn();

										else
											$("#mensaje3-2").fadeIn();
									}

								return false;
							}

						else
							{
								$(".errores").fadeOut(0);

								if ( repass == "" || pass != repass )
									{
										if ( repass == "")
											$("#mensaje4").fadeIn();

										else
											$("#mensaje4-1").fadeIn();

										return false;
									}
									
								else
									alert("Your contact data has been sent successfully. We will contact you via E-Mail within hours");		

							}

					}

			}	

	})	
	
	
	$("#reset").click(function(){			//	lo que hace esto es: al resetear oculta los div de errores
		
		$(".errores").fadeOut(0);

	})
	

}) // FIN document 

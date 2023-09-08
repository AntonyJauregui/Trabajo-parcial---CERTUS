// Método de verificação

function validar() {
            var nombre = form1.nome.value;
            var email = form1.email.value;
			var mensaje = form1.endereco.value;
           
			var email_test = new RegExp("^[a-zA-Z0-9_-]{2,63}@[a-zA-Z0-9]{2,63}[\.][a-z]{2,4}$");
			
			if( nombre == "") {
				alert('ingrese nombre');
				form1.nombre.focus;
				return false;
			}
			else if( email_test == "") {
					alert('ingrese email correcto');
					form1.email_test.focus;
					return false;
			}else if( email == "") {
				alert('ingrese email');
				form1.email.focus;
				return false;
			}else if( mensaje == "") {
				alert('ingrese mensaje');
				form1.mensaje.focus;
				return false;
			}else {
				alert("Correcto, mensaje enviado!");
			}			
		}
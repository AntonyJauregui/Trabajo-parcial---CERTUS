function test_patron(patron, valor) {
            if (valor !== '' && valor !== null) {
                return patron.test(valor);
            }
            return false;
        }

        // Recibe como parámetros la cadena con el error, el patrón y la cadena a comprobar
        function ver_error(error, patron, valor) {
            if (test_patron(patron, valor)) {
                cajaMensajes.innerHTML = '';
            } else {
                cajaMensajes.innerHTML = error;
            }
        }

        function test_input() {
            var input_id = this.id;
            var input_valor = this.value;

            // Patrones
            var dni_test = new RegExp("^[0-9]{8}");
            var nombre_test = new RegExp("^[a-zA-Z]+[ ][a-zA-Z]+([ ][a-zA-Z]+){0,2}$");
            var apellido_test = new RegExp("^[a-zA-Z]+[ ][a-zA-Z]+([ ][a-zA-Z]+){0,2}$");
            var edad_test = new RegExp(".*");
            var Respuesta_test = new RegExp("^[a-zA-Z]");
            var email_test = new RegExp("^[a-zA-Z0-9_-]{2,63}@[a-zA-Z0-9]{2,63}[\.][a-z]{2,4}$");

            switch (input_id) {
                case 'dni':
                    ver_error('Dni Incorrecto (Minimo 8 digitos)', dni_test, input_valor);
                    break;
                case 'nombre':
                    ver_error('Nombre Incorrecto (Mínimo 1 nombre , Máximo 3 nombre )', nombre_test, input_valor);
                    break;
                case 'apellido':
                    ver_error('Apellido Incorrecto (Mínimo 1 apellido, Máximo  2 apellidos)', apellido_test, input_valor);
                    break;    
                case 'edad':
                    ver_error('Edad no puede estar vacía', edad_test, input_valor);
                    break;
                case 'Respuesta':
                    ver_error('Respuesta Incorrecta (Mínimo 1 palabra , Máximo 6 palabras )', Respuesta_test, input_valor);
                    break;
                case 'email':
                    ver_error('Email Incorrecto (ingrese arroba @ o mas carateres que completen un correo)', email_test, input_valor);
                    break;
            }
        }

        function iniciar() {
            var inputs = document.getElementsByTagName('input');

            for (x of inputs) {
                // Poner al perder el foco del input
                x.addEventListener('blur', test_input);
            }
        }

        window.onload = iniciar;
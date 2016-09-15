function validateForm(){
	var nombre = document.getElementById("name").value;
    var contrasenia = document.getElementById("input-password").value;
	var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
	var opcion = document.querySelector("select").value;

	if (nombre.length == 0 && apellido == 0 && correo == 0 && contraseña == 0) {
		alert ("Complete los campos.");
	} else {

	if(nombre == null || nombre.length == 0 || nombre == ""){
		alert("Escribe tu nombre.");
	}else if ( /[0-9]/.test(nombre)){
		alert("No ingrese números.")
	}else if ( /^[a-z]/.test(nombre.charAt(0))){
		alert ("Escriba el primer caracter de su nombre en mayúscula.")
	}
	
	if(apellido == null || apellido.length == 0 || apellido == ""){
		alert("Escribe tu apellido.");
	}else if ( /[0-9]/.test(apellido)){
		alert("No ingrese números.")
	}else if ( /^[a-z]/.test(apellido.charAt(0)) ){
		alert ("Escriba el primer caracter de su apellido en mayúscula.")
	}
	
	var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!emailRegex.test(correo)) {
        alert("Ingrese un correo válido.");
    };

	if(contrasenia == null || contrasenia.length == 0) {
        alert("Ingresa una contraseña.");
    } else if (contrasenia.length < 6){
        alert("Contraseña no válida, debe tener como mínimo 6 caracteres.");
    } 
    if (contrasenia == "123456" || contrasenia == "098754" || contrasenia == "password"){
    	alert ("'123456', '098754' y 'password' no son contraseñas válidas.");
    };
	
    if(opcion == 0) {
    	alert("Elige una opción.");
    }    
	};
}
console.log('Validacion ');

const form = document.getElementById("form").value;
const nombre = document.getElementById("name").value;
const apellido = document.getElementById("lastname").value;
const correo = document.getElementById("email").value;
const age = document.getElementById("edad").value;
const formValidacion = () => {
  console.log("formValidacion");
        if (
          nombre.length  < 3|| 
          apellido.length < 3
                    
          ) {
            console.log("faliure");
            alert("El nombre y apellido minimo tiene que contener 3 letras");
            msgName.innerHTML = "El nombre minimo tiene que contener 3 letras ";
           msgApellido.innerHTML =
             "El apellido minimo tiene que contener 3 letras ";
             }else{
              console.alert("success");
               msgName.innerHTML="";
            msgApellido.innerHTML="";
             }

  }

console.log('Validacion ');

const form = document.getElementById("form").value;
const nombre = document.getElementById("name").value;
const apellido = document.getElementById("lastname").value;
const correo = document.getElementById("email").value;
const age = document.getElementById("edad").value;
const msgNombre = document.getElementById("msgName");// asi se deberia ver :D !!
//declara div 
// const er =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
const formValidacion = () => {
  console.log("formValidacion");
  
  
  if (
          nombre.length  < 3 || 
          apellido.length < 3 
          // correo.value == er
                    
          ) {
            console.log("faliure");
            alert("El nombre y apellido minimo tiene que contener 3 letras");
            msgName.innerHTML = "El nombre minimo tiene que contener 3 letras ";
            msgApellido.innerHTML =
             "El apellido minimo tiene que contener 3 letras ";
             msgEmail.innerHTML ="correo no valido"
             }else{
              console.alert("success");
               msgName.innerHTML="";
            msgApellido.innerHTML="";
            msgEmail.innerHTML ="";
             }

  }

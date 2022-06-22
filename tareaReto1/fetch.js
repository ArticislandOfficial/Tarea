console.log("Validacion ");

const form = document.getElementById("form").value;
const nameOne = document.getElementById("name").value;
const lastName = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const age = document.getElementById("edad").value;
<<<<<<< Updated upstream
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
=======

//declara div
// const er =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formValidacion = () => {
  console.log("formValidacion");
if (nameOne.length < 3) {
  console.log("faliure");
  alert("El nombre y apellido minimo tiene que contener 3 letras");
  msgName.innerHTML = "El nombre minimo tiene que contener 3 letras ";
} else {
  console.alert("success");
  msgName.innerHTML = "";
}
if (lastName.length < 3) {
  console.log("faliure");
  alert("El nombre y apellido minimo tiene que contener 3 letras");
  msgApellido.innerHTML = "El apellido minimo tiene que contener 3 letras ";
} else {
  console.alert("success");
  msgApellido.innerHTML = "";
}

};
>>>>>>> Stashed changes


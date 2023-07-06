document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe 
  
    // Obtiene los valores de los campos del formulario
    var nombre = document.getElementsByName("nombre")[0].value;
    var correo = document.getElementsByName("correo")[0].value;
    var telefono = document.getElementsByName("telefono")[0].value;
    var empresa = document.getElementsByName("empresa")[0].value;
    var direccion = document.getElementsByName("direccion")[0].value;
    var nit = document.getElementsByName("nit")[0].value;
    var mensaje = document.getElementById("msn").value;
  
    
    var data = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      empresa: empresa,
      direccion: direccion,
      nit: nit,
      mensaje: mensaje
    };
  
    // Realiza la petición POST a la API
    fetch("http://127.0.0.1:8000/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        console.log(response);
        alert("¡Gracias pronto nos contactarémos!");
        document.getElementById("contactForm").reset(); 
        window.close();
      })
      .catch(function(error) {
        console.error(error);
        alert("Error al enviar los datos. Por favor, inténtalo de nuevo.");
      });
  });
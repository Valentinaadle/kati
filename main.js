(function () {
  const tabla = document.querySelector("#tabla-principal");
  const tbody = document.querySelector("#tbody");
  const formulario = document.querySelector("#formulario-alumno");
  const agregarAlumnoBtn = document.querySelector("#agregar-alumno");
  let alumnos = [];
  
  // Función para agregar un nuevo alumno
  function agregarAlumno(event) {
    event.preventDefault(); // Previene la recarga de la página
    const legajo = document.getElementById("legajo").value;
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const nota = document.getElementById("nota").value;

    // Validar que se hayan ingresado valores
    if (!legajo || !nombres || !apellidos || !nota) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const nuevoAlumno = {
      legajo,
      nombres,
      apellidos,
      nota,
    };

    // Agregar el nuevo alumno a la matriz de alumnos
    alumnos.push(nuevoAlumno);

    // Crear una nueva fila en la tabla para el nuevo alumno
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
      <td>${legajo}</td>
      <td>${nombres}</td>
      <td>${apellidos}</td>
      <td>${nota}</td>
      <td><button class="btn btn-danger">Eliminar</button></td>
    `;

    // Agregar la fila a la tabla
    tbody.appendChild(nuevaFila);

    // Limpiar los campos del formulario
    document.getElementById("legajo").value = "";
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("nota").value = "";
  }

  // Agregar un event listener al botón "Agregar" en el formulario
  agregarAlumnoBtn.addEventListener("click", agregarAlumno);

  // Función para eliminar un alumno
  function eliminar(e) {
    const fila = e.target.closest("tr"); // Encuentra la fila actual
    const indice = Array.from(tbody.children).indexOf(fila); // Obtiene el índice de la fila
    console.log("Eliminar", indice);
    alumnos.splice(indice, 1);
    fila.remove(); // Elimina la fila del DOM
  }

  // Agrega un event listener a la tabla para manejar los clics en los botones "Eliminar"
  tabla.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-danger")) {
      eliminar(e);
    }
  });
})();

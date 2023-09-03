import PintarAnimacion from "./JS/Lottie.js";

document.addEventListener("DOMContentLoaded", function () {

    PintarAnimacion("logo-html", true, true, "html");
    PintarAnimacion("web", true, true, "programing");
    PintarAnimacion("etiquetas", true, true, "doc");
    PintarAnimacion("tipos", true, true, "etiquetas");
    PintarAnimacion("cssjs", true, true, "web");
});

const formulario = document.getElementById("formulario");
const alert = document.getElementById("alert");

const inscripcion = [];

formulario.addEventListener("submit", e =>{
    e.preventDefault();

    let carrera = "";

    document.getElementById("alert").classList.remove("alert");
   
    const matricula = document.getElementById("matricula").value;
    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("lastname").value;
    const edad = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const itc = document.getElementById("itc1").value;
    const ife = document.getElementById("iec1").value;


    if (matricula.trim() && nombre.trim() && apellido.trim() && edad.trim() && email.trim()
        && date.trim()) {
        
            document.getElementById("alert").classList.add("alert");

            document.getElementsByName("radio").forEach(i => i.checked && (carrera = i.value));

            const datos = {
                matricula,
                nombre,
                apellido,
                edad,
                email,
                date,
                carrera
            }

            
            inscripcion.push(datos);
            
            formulario.reset();

            agregarAlumnos();
        }
 
    })

formulario.addEventListener("reset", e => {

    document.getElementById("alert").classList.add("alert");

})

//Creacion de tabla

const agregarAlumnos = e => {

    const template = document.getElementById("template-datos");
    const tabla = document.getElementById("alumno-datos");
    const fragment = document.createDocumentFragment();

    inscripcion.forEach((alumno ,i ) =>{

        const clone = template.content.cloneNode(true);

        const longitud = inscripcion.length - 1;

        if (i === longitud) {

            if (i % 2 !== 0) {
                
                clone.querySelector("tr").style.backgroundColor = "#D6EAF8";
            }

            clone.querySelectorAll("tr td").forEach((item, i) => {

            
                switch (i) {
                    case 0:
                        item.textContent = alumno.matricula
                    break;
                         
                    case 1:
                        item.textContent = alumno.nombre
                    break;
                       
                    case 2:
                        item.textContent = alumno.apellido
                    break;
    
                    case 3:
                        item.textContent = alumno.edad;
                    break;
    
                    case 4:
                        item.textContent = alumno.date;
                    break;
    
                    case 5:
                        item.textContent = alumno.carrera;
                    break;
    
                }
    
            })

            fragment.appendChild(clone);
        }


    })
    
    tabla.appendChild(fragment);
}


//Menu

const menu = document.getElementById("menu");

const mostrarHeader = document.getElementById("header");

const links = document.querySelectorAll(".header-nav a");


menu.addEventListener("click", () => {

    mostrarHeader.classList.toggle("header-mostrar");

})


links.forEach((item) => {

    item.addEventListener("click", () => {

        mostrarHeader.classList.remove("header-mostrar");

    })

})


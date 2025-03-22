document.addEventListener("DOMContentLoaded", function () {
    const texto = "Hola [vanessa],\n\nSolo quería decirte que eres increíble. No hay suficiente código en el mundo para expresar lo que significas para mí.\n\nEres como ese bug que no quiero corregir, porque hace mi mundo más interesante.\n\nCon cariño,\nTu programador favorito ❤";
    const elementoTexto = document.getElementById("texto");
    let i = 0;

    function escribirTexto() {
        if (i < texto.length) {
            elementoTexto.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribirTexto, 50); // Velocidad de la animación
        } else {
            document.getElementById("pregunta").style.display = "block"; // Muestra la pregunta cuando termina el texto
        }
    }

    escribirTexto();
});

function respuesta(opcion) {
    let mensaje = "";
    if (opcion === "si") {
        mensaje = "¡Sabía que dirías que sí! entonces vivamos otro año más juntos 🎉";
    } else {
        mensaje = "Bueno, igual no te vas a deshacer de mi 💔";
    }

    document.getElementById("respuesta").innerText = mensaje;
    document.getElementById("respuesta").style.display = "block";
}
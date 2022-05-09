var textoCifrado = "";

function checkType() {
    words = String(document.getElementById("texto")).trim();
    const regxs = {
        "lower": /^[a-z0-9 ]+$/,
        "upper": /^[A-Z0-9 ]+$/,
        "upperLower": /^[A-Za-z0-9 ]+$/
    }

    if ((regxs.lower.test(words))) return '0';
    if (regxs.upper.test(words)) return '1';
    if (regxs.upperLower.test(words)) return '2';
    return -1;
}

function soloLetras(e) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnopqrstuvwxyz";

    especiales = "8-13";
    tecla_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function desencriptador(elemento) {
    var palabra = document.getElementsById("texto")[0].value;
    var palabra_Descodificada = atob(palabra);
    document.getElementById("result").innerHTML = palabra_Descodificada;
}

function copy() {
    let copyText = document.querySelector("text-input-salida");
    copyText.select();
    document.copyText("copy");
}

function copiarAlPortapapeles(id_elemento) {

    // Crea un campo de texto "oculto", este por un textarea

    var aux = document.createElement("textarea");

    // Asigna el contenido del elemento especificado al valor del campo
    // este para vaciar el contenido

    aux.innerHTML = document.getElementById(id_elemento).innerHTML

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand("copy");

    // Elimina el campo de la página
    document.body.removeChild(aux);

}

function copyToClickBoard() {
    var content = document.getElementById('result').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })

}

function paste() {
    let pasteText = document.querySelector("text-input");
    pasteText.focus();
    document.pasteText("paste");
    console.log(pasteText.textContent);
}

function encriptar() {

    var texto = document.getElementById("texto").value;
    console.log(texto);
    var mapObj = {
        e: "enter",
        a: "ai",
        o: "ober",
        u: "ufat",
        i: "imes"
    };
    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
    textoCifrado = texto.replace(re, function(matched) {
        return mapObj[matched];
    });
    document.getElementById("result").value = textoCifrado;
}

function desencriptar() {
    var texto = document.getElementById("texto").value;
    console.log(texto);
    var mapObj = {
        enter: "e",
        ai: "a",
        ober: "o",
        ufat: "u",
        imes: "i"
    };
    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
    textoCifrado = texto.replace(re, function(matched) {
        return mapObj[matched];
    });
    document.getElementById("result").value = textoCifrado;
}
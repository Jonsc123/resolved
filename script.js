
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


function btnEncriptar(){
    const encriptar = document.getElementById('campo1').value;
    const encriptado = encriptar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("campo2").value = encriptado
}


function btnDesEncriptar(){
    const desencriptar = document.getElementById ("campo1").value;
    const desencriptado = desencriptar.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("campo2").value = desencriptado
}


function btnCopiar() {
    const copyText = document.getElementById("campo2");
    copyText.select();
    document.execCommand("Copiar");
}


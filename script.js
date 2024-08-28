function encriptar() {
    let texto = document.getElementById("inputTexto").value;
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("outputTexto").innerText = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("inputTexto").value;
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    document.getElementById("outputTexto").innerText = textoDesencriptado;
}

function copiar() {
    let texto = document.getElementById("outputTexto").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
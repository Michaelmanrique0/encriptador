function procesarTexto(accion) {
  const text = document.getElementById("textarea-text").value;
  const transformado = document.getElementById("transformado");

  if (text === "") {
      alert("Por favor ingresa un texto.");
      return;
  }

  let textoTransformado = accion === 'encriptar' ? encriptar(text) : desencriptar(text);

  transformado.innerHTML = `<p class="text-transform">${textoTransformado}</p><button class="copi-button" onclick="copiarTexto()">Copiar</button>`;
  document.getElementById("transformado").style.alignContent = 'space-between';

  cambiarBotones(accion);
}

function encriptar(texto) {
  return texto.replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat");
}

function desencriptar(texto) {
  return texto.replace(/enter/g, "e")
              .replace(/imes/g, "i")
              .replace(/ai/g, "a")
              .replace(/ober/g, "o")
              .replace(/ufat/g, "u");
}

function copiarTexto() {
  const textoParaCopiar = document.querySelector(".text-transform").innerText;
  navigator.clipboard.writeText(textoParaCopiar).then(() => {
      alert("Texto copiado al portapapeles.");
  });
}

function cambiarBotones(accion) {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");

  if (accion === 'encriptar') {
      btn1.classList.remove("activo");
      btn1.classList.add("inactivo");
      btn2.classList.remove("inactivo");
      btn2.classList.add("activo");
  } else {
      btn2.classList.remove("activo");
      btn2.classList.add("inactivo");
      btn1.classList.remove("inactivo");
      btn1.classList.add("activo");
  }
}

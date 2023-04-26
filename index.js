const btnEncriptar = document.getElementById('btn__encriptar')
const btnCopiar = document.getElementById('btn__copiar')
const btnDesEncriptar = document.getElementById('btn__desEncriptar')
const inputPalabra = document.getElementById('input__palabra')
const pRespuesta = document.getElementById('p__respuesta')
const vocales = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
}

btnCopiar.addEventListener('click', () => {
  if (pRespuesta.textContent) {
    const textoACopiar = pRespuesta.textContent
    navigator.clipboard
      .writeText(textoACopiar)
      .then(() => (btnCopiar.textContent = 'Copiado!'))
      .catch((e) => console.log(e))
  }
})

btnEncriptar.addEventListener('click', () => {
  if (inputPalabra.value) {
    const palabraEncriptada = encriptar(inputPalabra.value)
    pRespuesta.textContent = palabraEncriptada
    btnCopiar.textContent = 'Copiar Texto'
  } else {
    pRespuesta.textContent = 'por favor ingrese un texto'
  }
})

btnDesEncriptar.addEventListener('click', () => {
  if (inputPalabra.value) {
    const palabraEncriptada = desencriptar(inputPalabra.value)
    pRespuesta.textContent = palabraEncriptada
    btnCopiar.textContent = 'Copiar Texto'
  } else {
    pRespuesta.textContent = 'por favor ingrese un texto'
  }
})

function encriptar(palabra) {
  let palabraEncriptada = palabra.replace(/e/g, 'enter')
  palabraEncriptada = palabraEncriptada.replace(/i/g, 'imes')
  palabraEncriptada = palabraEncriptada.replace(/a/g, 'ai')
  palabraEncriptada = palabraEncriptada.replace(/o/g, 'ober')
  palabraEncriptada = palabraEncriptada.replace(/u/g, 'ufat')

  return palabraEncriptada
}

function desencriptar(palabraEncriptada) {
  let palabraDesencriptada = palabraEncriptada.replace(/enter/g, 'e')
  palabraDesencriptada = palabraDesencriptada.replace(/imes/g, 'i')
  palabraDesencriptada = palabraDesencriptada.replace(/ai/g, 'a')
  palabraDesencriptada = palabraDesencriptada.replace(/ober/g, 'o')
  palabraDesencriptada = palabraDesencriptada.replace(/ufat/g, 'u')

  return palabraDesencriptada
}
const btnEncriptar = document.getElementById('btn__encriptar')
const btnDesEncriptar = document.getElementById('btn__desEncriptar')
const inputPalabra = document.getElementById('input__palabra')
const pRespuesta = document.getElementById('p__respuesta')
const respuestaI = document.getElementById('respuestaInicial')
const divRespuesta = document.getElementById('respuesta')
const vocales = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
}

function crearRespuesta(respuesta) {
  const divBoton = document.createElement('div')
  const botonCopiar = document.createElement('button')
  const pRespuesta2Div = document.createElement('div')
  const pRespuesta2 = document.createElement('p')
  pRespuesta2.classList.add('textoRespuesta2')
  divRespuesta.classList.remove('respuesta-container')
  botonCopiar.classList.add('boton')
  divBoton.classList.add('respuesta-container_boton')
  divRespuesta.classList.add('respuesta-container2')
  pRespuesta2Div.classList.add('respuesta-container2_texto')
  pRespuesta2.setAttribute('id', 'respuesta2')
  botonCopiar.setAttribute('id', 'btn__copiar')
  botonCopiar.textContent = 'Copiar Texto'
  pRespuesta2.textContent = respuesta

  pRespuesta2Div.appendChild(pRespuesta2)
  divBoton.appendChild(botonCopiar)
  divRespuesta.appendChild(pRespuesta2Div)
  divRespuesta.appendChild(divBoton)
}

btnEncriptar.addEventListener('click', () => {
  if (inputPalabra.value) {
    const btnCopiar = document.getElementById('btn__copiar')
    const palabraEncriptada = encriptar(inputPalabra.value)
    pRespuesta.textContent = palabraEncriptada
    if (btnCopiar) {
      const pRespuesta2 = document.getElementById('respuesta2')
      pRespuesta2.textContent = palabraEncriptada
      btnCopiar.textContent = 'Copiar Texto'
    }
    if (btnCopiar === null) {
      respuestaI.remove()
      crearRespuesta(palabraEncriptada)
      setTimeout(() => {
        const btnCopiar = document.getElementById('btn__copiar')
        btnCopiar.addEventListener('click', () => {
          if (pRespuesta.textContent) {
            const textoACopiar = pRespuesta.textContent
            navigator.clipboard
              .writeText(textoACopiar)
              .then(() => (btnCopiar.textContent = 'Copiado!'))
              .catch((e) => console.log(e))
          }
        })
      }, 100)
    }
  } else {
    pRespuesta.textContent = 'por favor ingrese un texto'
  }
})

btnDesEncriptar.addEventListener('click', () => {
  if (inputPalabra.value) {
    const btnCopiar = document.getElementById('btn__copiar')
    const palabraDesencriptada = desencriptar(inputPalabra.value)
    pRespuesta.textContent = palabraDesencriptada
    if (btnCopiar) {
      const pRespuesta2 = document.getElementById('respuesta2')
      pRespuesta2.textContent = palabraDesencriptada
      btnCopiar.textContent = 'Copiar Texto'
    }
    if (btnCopiar === null) {
      respuestaI.remove()
      crearRespuesta(palabraDesencriptada)
      setTimeout(() => {
        const btnCopiar = document.getElementById('btn__copiar')
        btnCopiar.addEventListener('click', () => {
          if (pRespuesta.textContent) {
            const textoACopiar = pRespuesta.textContent
            navigator.clipboard
              .writeText(textoACopiar)
              .then(() => (btnCopiar.textContent = 'Copiado!'))
              .catch((e) => console.log(e))
          }
        })
      }, 100)
    }
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

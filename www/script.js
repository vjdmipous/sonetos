// PROYECTO SONETOS

// La aplicación consta de dos zonas:
//   una zona donde se relacionan una lista de sonetos
//   una zona donde se muestra el soneto seleccionado de la lista de sonetos

// -------------  Variables de identificación de la autoria del proyecto
const uvus = "XXXXXX";
document.getElementById("uvus").innerHTML = uvus;

// En sonetos.js se define la variable sonetos que es un array de objetos con las
// siguiente propiedades:  id, autor y un array soneto de 14 cadenas

// -------------  Variables de interacción

// Para seleccionar el soneto a mostrar en el lienzo
const listaDeSonetosDOM = document.getElementById("listaSonetos");
listaDeSonetosDOM.addEventListener("click", (e) =>
  muestraSonetoSeleccionado(e.target.dataset.index)
);

//  --------    Funciones

function comienzo() {
  function generaListaDeSonetos() {
    listaDeSonetosDOM.innerHTML = sonetos
      .map((soneto, index) => {
        const titulo = soneto["titulo"].toUpperCase();
        return `<button class="lista-sonetos__item" data-index="${index}">${titulo}</button>`;
      })
      .join("");
  }

  generaListaDeSonetos();
  muestraSonetoSeleccionado(0);
}

function muestraSonetoSeleccionado(indice) {
  function generaSoneto(indice) {
    const soneto = sonetos[indice]["soneto"];
    const titulo = sonetos[indice]["titulo"];
    const autor = sonetos[indice]["autor"];
    const estiloSoneto = sonetos[indice]["estiloCSS"];

    const htmlTitulo = `<div class="titulo">` + titulo + `</div>`;
    const htmlAutor = `<div class="autor">` + autor + `</div>`;
    const htmlVersos = `<div class="versos">` + generaVersos(soneto) + `</div>`;

    const html = htmlTitulo + htmlAutor + htmlVersos;

    const lienzoDOM = document.getElementById("lienzo");
    lienzoDOM.classList = "lienzo lienzo-" + (++indice < 10 ? "0" + indice : indice);
    lienzoDOM.innerHTML = `<div class="soneto ${estiloSoneto}">` + html + "</div>";
  }

  function generaVersos(soneto) {
    const htmlSoneto = soneto
      .map((verso, index) => {
        // Codifica cada uno de los 14 versos del soneto: v-01, v-02, ..., v-14
        const i = ++index < 10 ? "0" + index : index;
        return `<div class="verso v-${i}">` + verso + "</div>";
      })
      .join("");
    return htmlSoneto;
  }

  generaSoneto(indice);
}

// Principio del programa

comienzo();

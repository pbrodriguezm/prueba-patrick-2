'use strict'
const GI = {
  createElement(tag, atributes) {
    let element = document
    console.log('==>>');
    return document.createElement(tag)
  }
}



console.log(elements.atributes);
const to_do = [
  'Alimentar al perro',
  'Estudiar para prueba escrita',
  'Pagar taxes',
  'Pasear a perro',
  'Comprar entradas para el cine',
]

const elements = document.getElementsByClassName("js-cont-todo");
to_do.forEach(data => {
  elements.item('').append(data);
})

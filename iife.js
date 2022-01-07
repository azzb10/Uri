//IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

//É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. A primeira é a 
//função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, 
//bem como evita que estas variáveis locais poluam o escopo global.

const counter = (function() {
  let count = 0

  return {
    inc: function() { count = count + 1 },
    get: function() {console.log(count)},
  }
})()

counter.get();
counter.inc();
counter.get();

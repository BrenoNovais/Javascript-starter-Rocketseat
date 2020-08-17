exElement = document.querySelector('div.ex1');
btnElement = document.querySelector('#ex1, button.botao1');
inputElement = document.querySelector('#ex1, input.input1');

btnElement.onclick = function() {
    var idadeInputada = inputElement.value ;
    
    
    function checkIdade(idade) {
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                return idade >= 18 ? resolve() : reject();
            }, 2000);
        });
    }
    
    checkIdade(idadeInputada)
        .then(function() {
            console.log("Maior que 18");
    })
        .catch(function() {
            console.log("Menor que 18");
    });

    inputElement.value = ''
}
      


btnElement2 = document.querySelector('#ex2, button.botao2');
inputElement2 = document.querySelector('#ex2, input.input2');
var ulElement = document.getElementById('result')

btnElement2.onclick = function() {
    axios.get('https://api.github.com/users/brenono/repos')
    .then(function(response2){
        var reps = response2.data

        for (rep of reps){
            var createLi = document.createElement('li')
            var textElement = document.createTextNode(rep.name)
            createLi.appendChild(textElement)
            ulElement.appendChild(createLi)

            objectLi = ''
        }
        

        /*var div = ''
        for (rep of reps){
            div += `<li>${rep.name}</li>`
        }
        document.getElementById('result').innerHTML = div*/
    })
    .catch(function(error2){
        console.warn(error2)
    });

    var idadeInputada2 = inputElement2.value
    console.log(idadeInputada2)
   


    inputElement2.value = ''

}
btnElement2 = document.querySelector('#ex2, button.botao2');
inputElement2 = document.querySelector('#ex2, input.input2');
var ulElement = document.getElementById('result')


btnElement2.onclick = function() {

    var createLi2 = document.createElement('li')
    var textElement2 = document.createTextNode('Carregando . . .')
    createLi2.appendChild(textElement2)
    ulElement.appendChild(createLi2)


    axios.get('https://api.github.com/users/' + inputElement2.value + '/repos')
    .then(function(response2){
        document.getElementById('result').innerHTML = '<ul></ul>'
        var reps = response2.data

        var cont = 0

        for (rep of reps){
            cont += 1
            var createLi = document.createElement('li')
            var textElement = document.createTextNode(rep.name)
            createLi.appendChild(textElement)
            ulElement.appendChild(createLi)
            objectLi = ''
            if (cont === 5) break
        }
        

        /*var div = ''
        for (rep of reps){
            div += `<li>${rep.name}</li>`
        }
        document.getElementById('result').innerHTML = div*/
    })
    .catch(function(error2){
        document.getElementById('result').innerHTML = '<ul></ul>'
        var createLi2 = document.createElement('li')
        var textElement2 = document.createTextNode('Usuario não existe!')
        createLi2.appendChild(textElement2)
        ulElement.appendChild(createLi2)

    });

    var idadeInputada2 = inputElement2.value
    console.log(idadeInputada2)
   
    inputElement2.value = ''
    
}
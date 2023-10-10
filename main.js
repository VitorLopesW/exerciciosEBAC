const btn = document.querySelector('#btmStart')
const formContainer = document.querySelector('#formContainer')

function porcentagemDeCrescimento(valorInicial,valorFinal){
    return (((valorFinal - valorInicial)/valorInicial)*100).toFixed(0)
}

btn.addEventListener('click', function(){
    fetch('form.html')
    .then(response => response.text())
    .then(htmlContent => {
        formContainer.innerHTML = htmlContent
            const btnForm = formContainer.querySelector('#submitBtn')
            const numA = formContainer.querySelector('#numA')
            const numB = formContainer.querySelector('#numB')
            const newDiv = document.createElement('div')   
            btnForm.insertAdjacentElement('afterend', newDiv)
            

            btnForm.addEventListener('click', function(event) {
                event.preventDefault()
                if(parseFloat(numB.value) > parseFloat(numA.value)){
                    while (newDiv.classList.length > 0) {
                        newDiv.classList.remove(newDiv.classList.item(0));
                    }
                    newDiv.classList.add('sucess')
                    newDiv.innerHTML = `Sua empresa vale atualmente R$ ${numA.value},
                    <br>seu planejamento de uma valuation futuro é R$ ${numB.value},
                    <br>sua nova meta de crescimento é ${porcentagemDeCrescimento(numA.value, numB.value)}%`
                    numA.value = ''
                    numB.value = ''
                } else {
                    while (newDiv.classList.length > 0) {
                        newDiv.classList.remove(newDiv.classList.item(0));
                    }
                    newDiv.classList.add('fail')
                    newDiv.innerHTML = 'É preciso que a META seja maior que o VALOR ATUAL'
                }
            })

        
    })
    .catch(error => console.error('Error fetching HTML:', error))
});








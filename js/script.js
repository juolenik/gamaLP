
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem("lead", convertData)

    let content = document.getElementById("content")

    let enviando = `<p>enviando...</p>`

       
    let pronto = `<p>Parabéns, aguardamos sua compra!</p>`

    content.innerHTML = enviando
  
     
    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

   


})
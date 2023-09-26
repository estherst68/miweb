const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'inicio.html'
}

const inicio = document.querySelector('#inicio')

inicio.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('inicio_success')
    window.location.href = 'inicio.html'
})
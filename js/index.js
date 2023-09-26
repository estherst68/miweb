const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'inicio.html'
}

const logout = document.querySelector('#inicio')

inicio.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'inicio.html'
})
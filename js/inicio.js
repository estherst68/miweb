const inicioForm = document.querySelector('#iniciForm')
inicioFormForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const contraseña = document.querySelector('#contraseña').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.usuario}`)
    localStorage.setItem('inicio_success', JSON.stringify(validUser))
    window.location.href = 'index.html' 
})  
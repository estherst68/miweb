const registroform = document.querySelector('#registroform')
registroform.addEventListener('submit', (e)=>{
    e.preventDeFault()
    const usuario = document.querySelector('#usuario').value
    const email = document.querySelector('#email').value
    const contraseña = document.querySelector('#contraseña').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    Users.push({usuario: usuario, email: email, contraseña: contraseña})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'inicio.html'
})


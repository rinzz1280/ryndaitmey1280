// const { jsx } = require("react/jsx-runtime")

const first_name = document.getElementById('first_name')
const last_name = document.getElementById('last_name')
const gender = document.getElementById('gender')
const email = document.getElementById('email')
const password = document.getElementById('password')
const role = document.getElementById('role')
const formRegister = document.getElementById('formRegister')

const User = JSON.parse(localStorage.getItem("user") || '[]')

if(formRegister){
    formRegister.addEventListener("submit",function(param){

    param.preventDefault()
    let user = {
        first_name :  first_name.value,
        last_name :  last_name.value,
        gender :  gender.value,
        email :  email.value,
        password:  password.value,
        role : role.value
    }

    User.push(user)
    

    localStorage.setItem("user",JSON.stringify(User))

    alert("User Register successfully")

    window.location.href = '../auth/login.html'
})
}



function login(e){

    e.preventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const User = JSON.parse(localStorage.getItem('user') || '[]')

    const user = User.find((user ) => {
        return user.email == email && user.password == password
    })

    if(!user){
        alert('you dunt have permission')
        return;
    }
    if(user){
        localStorage.setItem('auth_login',JSON.stringify(user))
        alert('Login successfully')
        // window.location.href = '../admin/dashboard.html';
    }
    checkRole(user)
}

function checkRole(role){ //staff , admine
    
    if(role.role=== 'admin'){
        window.location.href = '../admin/dashboard.html';
        return;
    }
    if(role.role === 'staff'){
        window.location.href = '../staff/index.html';
        return;
    }
    window.location.href = '../index.html';
        return;
}




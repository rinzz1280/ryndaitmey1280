
const fromlogin = document.getElementById('formlogin')
function login(){
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
        localStorage.setItem('auth_login')
        alert('Login successfully')
        window.location.href = '../admin/dashborad.html';
    }
}
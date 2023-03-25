let users = []
let form = document.getElementById('form')


form.addEventListener("submit",function(e) {
    document.getElementById('result').innerHTML=""
    e.preventDefault()
    let username = document.getElementById('usnDaftar').value
    let pw = document.getElementById('pwDaftar').value
    let eml = document.getElementById('emailDaftar').value

    // if (nama == "" || pw == "" || eml == "") {
    //     alert("Harap isi semua kolom");}
    
    let user = {
        username: username,
        password: pw,
        email: eml
    }

    document.getElementById('usnDaftar').value=""
    document.getElementById('pwDaftar').value=""
    document.getElementById('emailDaftar').value=""

    if (localStorage.getItem('users')) {
        users = localStorage.getItem('users')
        users = JSON.parse(users)
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Selamat")
        window.location.href = "login.html"
    }
    else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Selamat!")
        window.location.href = "login.html"
   
    }
})
const tombol = document.getElementById("masuk");
tombol.onclick = login;
function redirect() {
    window.location.href = 'galeri.html';
}


function login(e){
    const login = document.querySelector('.login');
    e.preventDefault();
    const emailAddress = document.getElementById("emailLogin").value;
    const passWord = document.getElementById("pwLogin").value;

    // ngambil nilai array dari localstorage
    const users = JSON.parse(localStorage.getItem("users"));
    // localStorage.setItem("username-logged-in", users[i].username)

    //Periksa apakah array users ada dan tidak kosong
    if (users && users.length) {
    // Melakukan perulangan pada array 
    for (let i = 0; i < users.length; i++) {
        if (emailAddress == users[i].email && passWord == users[i].password) {
            localStorage.setItem("username-logged-in", users[i].username)
            window.location.href="galeri.html";
            alert("Login berhasil");
            return; 
        }
    }
    }

    // jika salah penginputan
    alert("salah Email atau Password");
    }

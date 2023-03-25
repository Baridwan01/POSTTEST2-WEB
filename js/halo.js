const loggedInUsername = localStorage.getItem('username-logged-in')

if (loggedInUsername){
    const hello = document.getElementById('hello')
    hello.innerHTML= localStorage.getItem('username-logged-in')
}
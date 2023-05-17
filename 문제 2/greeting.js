const loginForm = document.getElementById("login-form");
const greeting = document.getElementById("greeting")

function hello(event){
    event.preventDefault();
    const name = loginForm.firstElementChild.value;
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    sayHi = "Hello" + " " + name;
    greeting.innerText = sayHi;
}
loginForm.addEventListener("submit",hello);
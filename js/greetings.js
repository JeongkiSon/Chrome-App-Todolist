const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSENAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSENAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}




const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSENAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show the greetings
    paintGreetings(savedUsername)
}



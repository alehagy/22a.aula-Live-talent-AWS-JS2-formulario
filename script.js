// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function(){
    usernameLabel.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur",function(){
    usernameLabel.classList.remove("required-popup")
})

// Validar valor do input
usernameInput.addEventListener("change", function(e){
    let valor= e.target.value
    console.log(valor)

    if(valor.length <4){
        //estilos dinamicos caso o valor nao seja valido
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText = 'Seu username deve ter mais de 3 caraceres'
        usernameHelper.classList.add("visible")
      
    }
    else{
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
        usernameInput.classList.remove("error")
    }  
})

let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

emailInput.add.addEventListener("change", function(e){
    let valor = e.target.value

    if(valor.includes("@") && valor.includes(".com")) {
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
               
    }else {
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "Email invalido"

    }
})
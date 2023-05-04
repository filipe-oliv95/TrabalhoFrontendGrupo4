//Fazer via LocalStorage
//  Salvar ela criptografada 

var usuarios = [
    {
        "login": "12345678@gmail.com",
        "senha": "MTIzNDU2Nzg="
    },
    {
        "login": "G4121212@gmail.com",
        "senha": "RzQxMjEyMTI="
    }
]

// const getUsuario = document.getElementById("user");
// const getSenha = document.getElementById("senha");
// const getnewPassword = document.getElementById("senha");

// Função do olho (visualizar a senha)

function olharSenha() {
    var typePassword = document.getElementById("senha");
    var verificar = typePassword.getAttribute("type");

    if (verificar == "password") {
        typePassword.setAttribute('type', 'text');
    } else if (verificar == 'text') {
        typePassword.setAttribute('type', 'password');
    }
}

//Função para Login

// function logar() {

//     var index = usuarios.findIndex(function (usuarios, i) {
//         return usuarios.login === getUsuario.value;
//     })

//     if (index === -1) {
//         alert("Usuário inexistente")
//     }
//     else if (usuarios[index].login === getUsuario.value && usuarios[index].senha === window.btoa(getSenha.value)) {
//         alert("Logado")
//     }
//     else {
//         alert("Senha incorreta")
//     }
// }

//Logar Local Storage

const getUsuario = document.getElementById("user");
const getSenha = document.getElementById("senha");

function loginLocalStorage() {
    var confirmacao = localStorage.getItem(getUsuario.value);

    if (confirmacao != null) {
        if (confirmacao === window.btoa(getSenha.value)) {
            alert("Logado")
        }
    }
}

const getNewP1 = document.getElementById("newPs1")
const getNewP2 = document.getElementById("newPs2")

//Redefinir senha

function changePassword() {
    var confirmacao = localStorage.getItem(getUsuario.value);

    if (confirmacao != null && getNewP1.value === getNewP2.value) {
        localStorage.setItem(getUsuario.value, window.btoa(getNewP2.value))
        alert("Senha alterada");
    }
}









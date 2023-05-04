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

const getUsuario = document.getElementById("user");
const getSenha = document.getElementById("senha");
const getnewPassword = document.getElementById("senha");

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

//Função Esquecer Senha - não sei se será implementado

//Função para Login

function logar() {

    var index = usuarios.findIndex(function (usuarios, i) {
        return usuarios.login === getUsuario.value;
    })

    if (index === -1) {
        alert("Usuário inexistente")
    }
    else if (usuarios[index].login === getUsuario.value && usuarios[index].senha === window.btoa(getSenha.value)) {
        alert("Logado")
    }
    else {
        alert("Senha incorreta")
    }
}

// var typePassword1 = document.getElementById("newPs1");
// var typePassword2 = document.getElementById("newPs2");

// //Visualizar senha Redefinir Senha

// function olharSenhaRedefinir() {
//     var verificar = typePassword1.getAttribute("type");

//     if (verificar == "password") {
//         typePassword1.setAttribute('type', 'text');
//         typePassword2.setAttribute('type', 'text');
//     } else if (verificar == 'text') {
//         typePassword1.setAttribute('type', 'password');
//         typePassword2.setAttribute('type', 'password');
//     }
// }

//Redefinir senha

function changePassword() {
    var index = usuarios.findIndex(function (usuarios, i) {
        return usuarios.login === getUsuario.value;
    })

    if (index === -1) {
        alert("Usuário inexistente")
    }
    else if (usuarios[index].login === getUsuario.value && (typePassword1.value === typePassword2.value)) {
        usuarios[index].senha = window.btoa(typePassword1.value);
        alert("Senha alterada");
    }
}









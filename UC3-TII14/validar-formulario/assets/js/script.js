// capturar o formulario
const formulario = document.getElementById('formulario');

// campos
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroSenha = document.getElementById('erroSenha');

// adicionar evento de envio
formulario.addEventListener('submit', function (event) {

    // impede que recarregue a página
    event.preventDefault();

    if(nome.value === '' ){
        erroNome.innerText = 'O nome é obrigatório';
    }

    if(email.value === '' ){
        erroEmail.innerText = 'O email é obrigatório';
    }
    else if(!email.value.include('@')){
        erroEmail.innerText = 'Digite um e-mail valido'
    }

    if(senha.value === '' ){
        erroSenha.innerText = 'O senha é obrigatório';
    }else if(senha.value.length < 6){
        erroSenha.innerText = 'A senha de ter no mínimo 6 caracteres'
    }

})



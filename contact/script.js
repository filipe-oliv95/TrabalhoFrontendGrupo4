// Obter o botão "Enviar" e adicionar um evento de clique
const enviarBtn = document.querySelector('.button input[type="button"]');
enviarBtn.addEventListener('click', enviarMensagem);

// Função que será chamada quando o botão "Enviar" for clicado
function enviarMensagem(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário
  
  // Obter os valores dos campos de entrada
  const nome = document.querySelector('.input-box input[placeholder="Nome"]').value;
  const email = document.querySelector('.input-box input[placeholder="Email"]').value;
  const mensagem = document.querySelector('.input-box.message-box input').value;
  
  // Criar um objeto com as informações da mensagem
  const mensagemObj = { nome, email, mensagem };
  
  // Armazenar o objeto no localStorage
  localStorage.setItem('ultimaMensagem', JSON.stringify(mensagemObj));
  
  // Limpar os campos de entrada
  document.querySelector('.input-box input[placeholder="Nome"]').value = '';
  document.querySelector('.input-box input[placeholder="Email"]').value = '';
  document.querySelector('.input-box.message-box input').value = '';
  
  alert('Mensagem enviada com sucesso!'); // Exibir uma mensagem de sucesso
}


async function chamarAPI() {
  const saida = document.getElementById("saida");
  saida.innerHTML = "⏳ O gatinho está miando para o servidor...";

  try {
    const resposta = await fetch("https://projeto-ci-cd-back-6w47.onrender.com/");
    const dados = await resposta.json();
    saida.innerHTML = `🐱💬 <em>${dados.mensagem}</em>`;
  } catch (erro) {
    saida.innerHTML = "😿 Erro ao ouvir o miado da API...";
  }
}

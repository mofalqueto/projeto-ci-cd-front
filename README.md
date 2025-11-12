# 🐱 API Gatossaura — Frontend

Frontend simples do projeto **API Gatossaura**, desenvolvido como parte da disciplina de **Integração Contínua e Entrega Contínua (CI/CD)**.

Este front consome os dados da **API backend** hospedada na [Render](https://projeto-ci-cd-back-6w47.onrender.com) e exibe as respostas de forma interativa na página.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API**
- **Node.js / Express (no backend)**
- **Vercel** (hospedagem do frontend)
- **Render** (hospedagem do backend)

---

## 🧩 Estrutura do Projeto

```
📂 frontend/
 ├── index.html         # Página principal
 ├── style.css          # Estilos da interface
 ├── script.js          # Lógica para consumo da API
```

---

## ⚙️ Como Executar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-ci-cd-front.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd projeto-ci-cd-front
   ```

3. Abra o arquivo `index.html` diretamente no navegador **ou** use uma extensão como **Live Server (VS Code)**.

4. Certifique-se de que o backend está online em:
   ```
   https://projeto-ci-cd-back-6w47.onrender.com
   ```

5. Acesse a interface e veja a mensagem de resposta da API! 🐾

---

## 🌐 Deploy

- **Frontend:** hospedado na **[Vercel](https://vercel.com)**  
- **Backend:** hospedado na **[Render](https://render.com)**  

> 💡 Dica: o deploy automático foi desativado no Render; as atualizações são feitas manualmente.

---

## 🔄 Integração com o Backend

O arquivo `script.js` realiza uma requisição `fetch` para o endpoint principal da API:

```javascript
async function chamarAPI() {
  const saida = document.getElementById("saida");
  saida.innerHTML = "⏳ O gatinho está miando para o servidor...";

  try {
    const resposta = await fetch("https://projeto-ci-cd-back-6w47.onrender.com");
    const dados = await resposta.text();
    saida.innerHTML = `😺 Resposta do servidor: ${dados}`;
  } catch (erro) {
    saida.innerHTML = "❌ O gatinho não conseguiu miar para o servidor!";
  }
}
```

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto foram praticados:

- Criação e consumo de APIs REST.
- Deploy de front e back em plataformas diferentes.
- Controle de versão com **Git** e **GitHub**.
- Aplicação de boas práticas de **CI/CD**.

---

## 🐾 Autora

**Monica Falqueto**  
💌 [Perfil no GitHub](https://github.com/mofalqueto)  
🎓 FATEC Franca — DSM4  
💻 Projeto desenvolvido para fins acadêmicos.

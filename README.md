# TDD com Express e Jest

Este é um projeto simples que demonstra o uso de **Test-Driven Development (TDD)** com **Express** e **Jest**. Ele implementa uma API básica com rotas e testes automatizados.

## 📋 Funcionalidades

- Rota principal (`/`) que retorna um JSON indicando sucesso.
- Rota `/cor/:pessoa` que retorna a cor favorita de um usuário específico.
- Testes automatizados para verificar o funcionamento das rotas.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)

## 📦 Requisitos

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)

## 🔧 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências:
   ```bash
   npm install
# ▶️ Como Executar

1. Inicie o servidor:
   node src/server.js

2. O servidor estará rodando na porta 3000. Você pode acessar as seguintes rotas:

   - GET / → Retorna: { "success": true }
   - GET /cor/usuario1 → Retorna: { "cor": "vermelho", "color": "red" }

# 🧪 Como Executar os Testes

Execute os testes com o comando:
   npm test

Os testes verificarão:
- Se a aplicação responde na porta 3000.
- Se a rota /cor/usuario1 retorna a cor favorita corretamente.

# 📁 Estrutura do Projeto

.
├── .gitignore
├── package.json
├── src
│   ├── app.js         # Configuração das rotas
│   └── server.js      # Inicialização do servidor
├── test
│   └── geral.test.js  # Testes automatizados

# 🛠️ Contribuindo

- Faça um fork do projeto.
- Crie uma nova branch para suas alterações.

# 📄 Licença

Este projeto está sob a licença ISC.
Consulte o arquivo LICENSE para mais detalhes.

# 🚀 Space Quiz — Perguntas do Universo 🌌

> Um quiz mobile sobre **astronomia e o espaço**, feito com Expo e React Native, rodando em **Android, iOS e Web** a partir de uma única base de código.

<p align="center">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-SDK%2051-000020?logo=expo&logoColor=white" />
  <img alt="React Native" src="https://img.shields.io/badge/React%20Native-0.74-61DAFB?logo=react&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript&logoColor=white" />
  <img alt="Expo Router" src="https://img.shields.io/badge/Expo%20Router-file--based-1B1F23?logo=react&logoColor=white" />
  <img alt="Deploy" src="https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=githubpages&logoColor=white" />
</p>

---

## 🌐 Demo ao vivo

👉 **[chris-valentim.github.io/Quiz-Mobile](https://chris-valentim.github.io/Quiz-Mobile/)**

A versão web é gerada automaticamente a cada `push` na branch `master` e publicada no **GitHub Pages**.

---

## 📖 Sobre o projeto

O **Space Quiz** é um jogo de perguntas e respostas com curiosidades do universo — planetas, luas, estrelas, buracos negros e exploração espacial. 🌠

A cada partida, o app **sorteia 10 perguntas** de um banco de **30**, embaralhando a ordem para que nenhuma rodada seja igual à anterior. Ao final, o jogador recebe sua **pontuação em porcentagem** e pode reiniciar para tentar de novo.

O foco do projeto foi praticar **desenvolvimento mobile universal** (mesmo código para celular e web) com **Expo Router**, componentização limpa e gerenciamento de estado através de um **custom hook**.

---

## ✨ Funcionalidades

- 🎲 **Perguntas aleatórias** — 10 sorteadas de um total de 30 a cada partida
- 🪐 **Banco temático** — questões sobre o sistema solar, galáxias e exploração espacial
- 📊 **Resultado em porcentagem** — cálculo automático de acertos ao concluir
- 🔁 **Reinício instantâneo** — nova partida com perguntas reembaralhadas
- 📱 **Multiplataforma** — Android, iOS e navegador com a mesma base de código
- 🎨 **Identidade visual espacial** — fontes personalizadas e fundo estilizado

---

## 🖋️ Tipografia & Identidade visual

A "cara" do app vem de duas fontes de exibição temáticas, carregadas via `expo-font`:

| Fonte | Onde é usada | Estilo |
|-------|--------------|--------|
| 🌟 **Solar Space Demo** | Título principal `SPACE QUIZ` | Display futurista, impactante |
| 🛰️ **Space Mission** | Subtítulo `PERGUNTAS DO UNIVERSO` | Técnica, remete a missões espaciais |

O layout usa uma **imagem de fundo do espaço** com opacidade reduzida e **degradês (`expo-linear-gradient`)** sobre os cartões de pergunta, criando profundidade e reforçando o clima cósmico. A paleta é predominantemente escura (preto/branco com destaque verde no botão de reinício).

---

## 🛠️ Tecnologias e bibliotecas

### Núcleo
| Tecnologia | Versão | Papel no projeto |
|------------|--------|------------------|
| ⚛️ **React Native** | 0.74.5 | Framework de UI nativa multiplataforma |
| 🧬 **React** | 18.2 | Biblioteca base de componentes |
| 🚀 **Expo (SDK 51)** | ~51.0 | Plataforma/tooling que simplifica build e execução |
| 🧭 **Expo Router** | ~3.5 | Roteamento baseado em arquivos (file-based routing) |
| 🔤 **TypeScript** | 5.3 | Tipagem estática em todo o código |
| 🌍 **React Native Web** | 0.19 | Renderização do app como site estático |

### Recursos de UI e navegação
| Biblioteca | Uso |
|------------|-----|
| 🅰️ `expo-font` | Carregamento das fontes personalizadas |
| 🌈 `expo-linear-gradient` | Degradês sobre os cartões de pergunta |
| ⏳ `expo-splash-screen` | Splash controlada até as fontes carregarem |
| 🧭 `@react-navigation/native` + `react-native-screens` | Base de navegação nativa |
| 👆 `react-native-gesture-handler` / `react-native-reanimated` | Gestos e animações |
| 📐 `react-native-safe-area-context` | Áreas seguras em diferentes telas |

### Qualidade e automação
| Ferramenta | Uso |
|------------|-----|
| ✅ **ESLint** (`eslint-config-expo`) | Padronização e análise estática |
| 🧪 **Jest** (`jest-expo`) | Estrutura de testes |
| 🤖 **GitHub Actions** | CI/CD — build e deploy automático no GitHub Pages |

---

## 🗂️ Estrutura do projeto

```
Quiz-Mobile/
├── app/                      # 🧭 Rotas (expo-router)
│   ├── _layout.tsx           #    Layout raiz + carregamento de fontes
│   └── index.tsx             #    Tela principal do quiz
├── components/
│   ├── questionario/         # ❓ Componentes do jogo
│   │   ├── Enunciado.tsx     #    Texto da pergunta
│   │   ├── Opcao.tsx         #    Botão de alternativa
│   │   ├── Pergunta.tsx      #    Pergunta + lista de opções
│   │   └── Resultado.tsx     #    Placar final em %
│   └── template/             # 🎨 Componentes visuais
│       ├── Logo.tsx          #    Título com as fontes temáticas
│       └── Pagina.tsx        #    Container com fundo do espaço
├── data/
│   ├── constants/perguntas.ts  # 🪐 Banco com as 30 perguntas
│   ├── hooks/useQuestionario.ts# 🧠 Lógica/estado do quiz
│   └── model/Pergunta.ts       # 🧩 Tipagem de uma pergunta
├── assets/                   # 🖼️ Fontes e imagens
└── .github/workflows/        # 🤖 Pipeline de deploy
```

---

## ⚙️ Como funciona

Toda a lógica do jogo vive no hook **`useQuestionario`**, que mantém o estado e expõe uma API limpa para a tela:

- 🎲 **`sortearPerguntas()`** — embaralha o banco (`Math.random`) e corta as 10 primeiras
- 🧠 **Estado** — índice da pergunta atual, respostas do jogador e perguntas sorteadas
- 📈 **`pontuacao`** — compara cada resposta com o gabarito e conta os acertos
- ✅ **`concluido`** — indica quando todas as perguntas foram respondidas
- 👉 **`responder(indice)`** — registra a resposta e avança
- 🔁 **`reiniciar()`** — zera tudo e sorteia novas perguntas

A tela (`app/index.tsx`) apenas consome esse hook e alterna entre exibir a **`<Pergunta />`** ou o **`<Resultado />`**, mantendo os componentes "burros" e a lógica centralizada. 🧼

---

## 🏁 Como executar localmente

Pré-requisitos: **Node.js** e o app **Expo Go** (para testar no celular).

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npx expo start
```

Em seguida escolha a plataforma:

```bash
npm run android   # 🤖 Emulador/dispositivo Android
npm run ios       # 🍎 Simulador iOS (macOS)
npm run web       # 🌐 Navegador
```

> 💡 Ou escaneie o QR Code do terminal com o app **Expo Go** no seu celular.

---

## 📜 Scripts disponíveis

| Comando | O que faz |
|---------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento do Expo |
| `npm run android` | Abre no Android |
| `npm run ios` | Abre no iOS |
| `npm run web` | Abre no navegador |
| `npm run lint` | Roda o ESLint |
| `npm test` | Executa os testes com Jest |

---

## ☁️ Deploy

A versão web é publicada no **GitHub Pages** de forma automatizada:

1. 📦 Um workflow do **GitHub Actions** roda a cada `push` na `master`
2. 🏗️ Ele executa `expo export -p web`, gerando o site estático em `dist/`
3. 🚀 O conteúdo é publicado na branch **`gh-pages`**, servida pelo GitHub Pages

Como o Pages hospeda em um subcaminho (`/Quiz-Mobile/`), o `app.json` define `experiments.baseUrl` para que os assets sejam resolvidos corretamente. ✅

---

## 👤 Autor

Feito com 💜 e curiosidade sobre o cosmos por **Christian Valentim**.

⭐ Se você gostou do projeto, deixe uma estrela no repositório!

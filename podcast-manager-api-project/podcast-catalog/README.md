# 🎙️ Podcast Catalog

API para gerenciamento e consulta de episódios de podcasts, desenvolvida com **Node.js e TypeScript**, utilizando o módulo nativo `http`.

O projeto foi desenvolvido com uma arquitetura organizada em camadas, separando responsabilidades entre **controllers, services, repositories, models e rotas**, facilitando a manutenção e evolução da aplicação.

## 🚀 Tecnologias

* **Node.js**
* **TypeScript**
* **HTTP Module** — servidor HTTP nativo do Node.js
* **tsx** — execução do TypeScript em ambiente de desenvolvimento
* **tsup** — build e distribuição da aplicação
* **dotenv / `.env`** — configuração de variáveis de ambiente

## 📌 Funcionalidades

Atualmente, a API possui funcionalidades relacionadas ao catálogo de podcasts:

* 📋 Listagem de episódios
* 🔎 Filtragem de episódios
* 🗂️ Organização dos dados através de repository
* 🧩 Separação da lógica de negócio em services
* 🌐 Tratamento das requisições HTTP através de controllers
* ⚙️ Configuração da porta do servidor através de variável de ambiente

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas:

```text
Client
  │
  │ HTTP Request
  ▼
┌─────────────────────┐
│ Podcast Controller  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      Services       │
│                     │
│  ├─ List Episodes   │
│  └─ Filter Episodes │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     Repository      │
│                     │
│  Podcast Repository │
└──────────┬──────────┘
           │
           ▼
      Podcast Data
```

### Fluxo da aplicação

Uma requisição HTTP chega ao servidor e é encaminhada para a aplicação.

O `app.ts` identifica o método HTTP e a rota solicitada e direciona a requisição para o controller correspondente.

O controller utiliza os services responsáveis pela regra de negócio, que por sua vez acessam o repository responsável pelos dados dos podcasts.

```text
Request
   ↓
Server
   ↓
App
   ↓
Routes
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Response
```

## 📁 Estrutura do projeto

```text
podcast-catalog/
│
├── docs/
│   └── arch/
│       ├── app-goes.md
│       └── arch.png
│
├── src/
│   │
│   ├── controllers/
│   │   └── podcasts-controllers.ts
│   │
│   ├── models/
│   │   ├── podcast-model.ts
│   │   └── podcast-transfer-model.ts
│   │
│   ├── repositories/
│   │   ├── podcast.json
│   │   └── podcasts-repository.ts
│   │
│   ├── routes/
│   │   └── routes.ts
│   │
│   ├── services/
│   │   ├── filter-episodes-services.ts
│   │   └── list-episodes-services.ts
│   │
│   ├── utils/
│   │   ├── content-type.ts
│   │   ├── http-methods.ts
│   │   ├── status-code.ts
│   │   └── type-encode.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## ⚙️ Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

* [Node.js](https://nodejs.org/)
* npm

Verifique as versões instaladas:

```bash
node --version
npm --version
```

## 🔧 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd podcast-catalog
```

Instale as dependências:

```bash
npm install
```

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
```

A aplicação utiliza a variável `PORT` para definir a porta em que o servidor HTTP será executado.

## ▶️ Executando o projeto

### Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

O servidor será iniciado utilizando o arquivo:

```text
src/server.ts
```

### Desenvolvimento com Watch

Para executar a aplicação com atualização automática durante o desenvolvimento:

```bash
npm run start:watch
```

### Build

Para gerar a versão de distribuição:

```bash
npm run dist
```

O processo de build utiliza o **tsup** para gerar a versão distribuível da aplicação.

## 🌐 Servidor HTTP

O servidor é criado utilizando o módulo nativo `http` do Node.js:

```typescript
const server = http.createServer(app);
```

A porta é obtida através da variável de ambiente:

```typescript
const port = process.env.PORT;
```

Depois disso, o servidor começa a escutar as requisições:

```typescript
server.listen(port, () => {
    console.log(`Servidor Iniciado na porta ${port}!`);
});
```

## 🛣️ Rotas

O roteamento da aplicação é baseado no método HTTP e no caminho da requisição.

Atualmente, a aplicação trabalha com requisições `GET` relacionadas ao catálogo de episódios:

| Método | Recurso             | Descrição                                      |
| ------ | ------------------- | ---------------------------------------------- |
| `GET`  | Lista de episódios  | Retorna os episódios disponíveis               |
| `GET`  | Filtro de episódios | Permite consultar episódios através de filtros |

As rotas são centralizadas em:

```text
src/routes/routes.ts
```

E o tratamento das requisições é realizado em:

```text
src/controllers/podcasts-controllers.ts
```

## 🧠 Camada de Services

A lógica da aplicação é separada em services específicos.

### List Episodes

Responsável pela lógica relacionada à listagem dos episódios.

```text
src/services/list-episodes-services.ts
```

### Filter Episodes

Responsável pela lógica relacionada à filtragem dos episódios.

```text
src/services/filter-episodes-services.ts
```

Essa separação evita concentrar toda a lógica de negócio nos controllers e facilita futuras alterações.

## 🗄️ Repository

O acesso aos dados é separado através da camada de repository:

```text
src/repositories/podcasts-repository.ts
```

Os dados utilizados pelo catálogo estão armazenados em:

```text
src/repositories/podcast.json
```

Dessa forma, a aplicação mantém a responsabilidade de acesso aos dados isolada da camada de negócio.

## 📦 Models

Os modelos utilizados pela aplicação ficam dentro de:

```text
src/models/
```

Atualmente existem:

```text
podcast-model.ts
podcast-transfer-model.ts
```

Esses arquivos são responsáveis pela definição e transferência dos dados utilizados pela aplicação.

## 🛠️ Utils

A pasta `utils` concentra elementos reutilizáveis relacionados ao funcionamento HTTP da aplicação:

```text
src/utils/
├── content-type.ts
├── http-methods.ts
├── status-code.ts
└── type-encode.ts
```

Essa organização evita a duplicação de constantes e definições utilizadas em diferentes partes do projeto.

## 🧪 Tecnologias e dependências de desenvolvimento

O projeto utiliza as seguintes dependências:

```json
{
  "@types/node": "^26.2.0",
  "tsup": "^8.5.1",
  "tsx": "^4.23.12",
  "typescript": "^7.0.2"
}
```

### TypeScript

Utilizado para adicionar tipagem estática ao projeto e melhorar a segurança e manutenção do código.

### tsx

Utilizado para executar arquivos TypeScript diretamente durante o desenvolvimento.

### tsup

Utilizado para gerar a versão de distribuição da aplicação.

## 📐 Documentação da arquitetura

A arquitetura do projeto está documentada na pasta:

```text
docs/arch/
```

O diagrama representa o fluxo entre o servidor, controller, services e repository.

![Arquitetura do projeto](docs/arch/arch.png)

## 🎯 Objetivo do projeto

O projeto tem como objetivo colocar em prática conceitos fundamentais do desenvolvimento de APIs utilizando **Node.js e TypeScript**, especialmente:

* criação de servidor HTTP sem frameworks;
* organização de projetos em camadas;
* separação de responsabilidades;
* criação de controllers;
* implementação de services;
* utilização de repositories;
* definição de models;
* tratamento de métodos HTTP;
* organização de rotas;
* configuração através de variáveis de ambiente;
* geração de build para distribuição.

## 📚 Status do projeto

🚧 **Em desenvolvimento**

Novas funcionalidades e melhorias podem ser adicionadas conforme a evolução do projeto.

## 👨‍💻 Autor

**L.G.O.**

Projeto desenvolvido para estudos e prática de desenvolvimento backend com **Node.js + TypeScript**.

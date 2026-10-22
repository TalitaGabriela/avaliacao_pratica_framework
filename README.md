# Sistema de Filmes - CRUD

Avaliação Prática 1 da disciplina Desenvolvimento Baseado em Frameworks (2026.2), do curso de Tecnologia em Análise e Desenvolvimento de Software.

Aluna: [Talita Gabriela Del Poso Vilalva]

Professor: Renato de Souza Garcia

## Sobre o projeto

API feita em NestJS para um sistema de filmes, que pode cadastrar filmes e as notas dadas a eles. Os dados ficam guardados em memória, dentro de um array no service. Por isso, quando o servidor é reiniciado, os filmes cadastrados são perdidos.

## Entidade Filme

| Campo | Tipo |
| --- | --- |
| id | number (gerado automaticamente) |
| titulo | string |
| ano | number |
| genero | string |
| diretor | string |
| nota | number (de 0 a 10) |

## Rotas

| Método | Rota | Descrição | Precisa de token |
| --- | --- | --- | --- |
| POST | /filmes | Cadastra um filme | Sim |
| GET | /filmes | Lista todos os filmes | Não |
| GET | /filmes/:id | Busca um filme pelo id | Não |
| PATCH | /filmes/:id | Atualiza um filme | Sim |
| DELETE | /filmes/:id | Remove um filme | Sim |
| GET | /filmes/nota/:nota | Lista os filmes com nota maior ou igual à informada | Não |
| GET | /filmes/logs | Mostra o log das operações | Não |

Nas rotas que precisam de token, enviar o header:

```
x-access-token: secrettoken
```

## O que foi usado da matéria

- **Módulo, controller e service:** `FilmesModule`, `FilmesController` e `FilmesService`.
- **Injeção de dependência e providers:**
  - `IdGeneratorService` (useClass): gera o id dos filmes.
  - `APP_NAME` (useValue): nome do sistema.
  - `STARTUP_DATE` (useFactory): data em que o sistema iniciou.
  - `LogService`: registra cada operação feita no service.
- **Pipes:**
  - `ValidationPipe` global com os decorators do class-validator no DTO.
  - `ParseIntPipe`: converte o id e retorna erro 400 se não for número.
  - `ValidaNotaPipe`: valida a nota da rota de nota mínima.
  - `ValidaFilmePipe`: no cadastro, não deixa o título vazio nem a nota fora de 0 a 10.
- **Guard:** `AuthGuard` protege as rotas de cadastro, atualização e remoção pelo header `x-access-token`.
- **Interceptor:** `LoggingInterceptor` mostra no console o tempo de execução das rotas.

## Como o projeto foi criado

```bash
npm i -g @nestjs/cli
nest new project-name
npx nest g resource filmes
npm i class-validator
```
## Como executar o projeto

```bash
npm run build
npm start
```

## Testes das rotas

Os testes estão no arquivo `src/filmes/filmes.http` e são executados com a extensão REST Client do VS Code. O arquivo testa todas as rotas, tanto os casos que funcionam quanto os que devem dar erro (sem token, id inválido, título vazio e nota fora da escala).
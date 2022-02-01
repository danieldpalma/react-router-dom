# React Router Dom

O objetivo desde projeto é demonstrar a usabilidade do React Router.

Projeto feito pelo curso ProgramadorBR.

<br>

## react-router-dom

Para usar o pacote basta baixar com o seguinte comando:

`npm install react-router-dom`

Para documentação aqui, basta [clicar aqui](https://reactrouter.com/docs/en/v6/getting-started/overview)

## BrowserRouter

Permite que sejam criado rotas dentro dele.

## Routes

Serve como um agrupador de Route, todo Route deve estar dentro de Router.

## Route

Permite que seja criado uma rota.

Utilizando a tag `path` para indicar qual será o caminho da URL.

Utilizando a tag `element` para indicar qual elemento será renderizador ao acessar esse caminho.

## Link

Permite criar uma referencia a alguma rota utilizando a tag `to`

obs: Diferença entre `<Link to/>` e `<a href/>` quando utilizado a tag `<a>` a página é toda recarregada, enquanto com `<Link>` ela é apenas renderizada para a rota definida no `to`.
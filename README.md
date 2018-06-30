# Boilerplate para Projetos Web da Cubos

## O que é

Este é um repositório que contém uma base para iniciar projetos web, feito com a stack da Cubos e usando nossas boas práticas e demais convenções.

## Como usar

### Para iniciar um projeto web:

1.  Primeiro, clone este repositório:

```shell
git clone git@git.cubos.io:cubos/boilerplate-web.git nome_do_seu_projeto
```

2.  Então, instale suas dependências:

```shell
cd nome_do_seu_projeto
yarn
```

3.  Enquanto isso, lembre-se de customizar o projeto, mudando o título da página no arquivo [.neutrinorc.js](./.neutrinorc.js)
4.  Finalmente, execute seu projeto com o seguinte comando:

```shell
yarn start
```

5.  Espere um pouco e a página do projeto estará disponível em http://localhost:5000
    1.  A porta do projeto pode ser configurada em [.neutrinorc.js](./.neutrinorc.js), `options.port`

### Outros comandos

- Para executar os testes presentes na pasta `test`, execute `yarn test`
- Para compilar o projeto com otimizações para ambiente de produção, execute `yarn build`
  - O projeto compilado estará disponível na pasta dist
  - A pasta de destino pode ser configurada em [.neutrinorc.js](./.neutrinorc.js), `options.output`

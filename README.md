# Jogo da Velha

Este é um projeto de um jogo da velha implementado em JavaScript. O jogo possui uma interface interativa onde dois jogadores podem jogar alternadamente e competir para obter três símbolos iguais em uma linha, coluna ou diagonal.

Você pode acessar o jogo online [aqui](https://dev-3rick.github.io/Jogo-da-velha/).

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Adicionar nomes dos jogadores para começar o jogo;
- Alternar entre os jogadores e permitir que eles façam suas jogadas;
- Verificar se um jogador venceu o jogo;
- Exibir o nome do jogador atual;
- Contar o número de jogadas realizadas;
- Exibir o resultado como empate quando todas as casas estiverem preenchidas.

## Como Jogar

1. Abra o arquivo `index.html` em um navegador da web compatível.
2. Digite os nomes dos dois jogadores e clique no botão "Começar".
3. Os jogadores devem alternar entre si para fazer suas jogadas clicando em qualquer uma das células disponíveis no tabuleiro.
4. O jogo verificará automaticamente se um jogador venceu ou se o jogo terminou em empate.
5. Quando um jogador vencer ou o jogo terminar em empate, uma mensagem será exibida na tela.
6. Para reiniciar o jogo, clique no botão "Reiniciar".

## Estrutura do Código

O código do projeto está organizado da seguinte forma:

- As variáveis `BtnInputname`, `reload`, `playindex`, `inicio`, `blockJogo`, `display`, `result`, `players`, `jogadaindex`, `currentPlayer`, `tabelajogadas`, `contadorDeJogadas` e os event listeners estão localizados no início do código.
- A função `addInfoVelha()` é responsável por adicionar a jogada de um jogador quando uma célula é clicada.
- A função `addName()` é responsável por adicionar o nome dos jogadores ao array `players`.
- A função `MostrarName()` é responsável por exibir o nome do jogador atual.
- A função `ContadorGeral()` é responsável por atualizar o contador de jogadas e alternar entre os jogadores.
- A função `verificarVitoria()` é responsável por verificar se um jogador venceu o jogo.
- A função `alertVitory()` é responsável por exibir uma mensagem de vitória quando um jogador vence.
- As funções `alterarclassesX()`, `alterarclassesO()`, `reinciar()` e `enpate()` são responsáveis por alterar as classes CSS das células do tabuleiro.

## Contribuindo

Se você deseja contribuir com este projeto, fique à vontade para enviar pull requests ou abrir issues no repositório do projeto no GitHub.

Divirta-se jogando o jogo da velha!

# E-commerce de Jogos e Video Games
Este é um projeto de um e-commerce de jogos e video games utilizando a biblioteca React JS. O objetivo é criar uma aplicação web interativa que permita aos usuários realizar compras de jogos e video games, com várias funcionalidades, como login com verificação de input, página de produtos com um banner de fotos em movimento, detalhes do produto, modal de finalização de compra, preenchimento de informações pessoais.

## Tecnologias Utilizadas
- React JS
- React Router
- HTML5
- SASS
- Media Query (responsividade) para Mobile (max 480px)

## Planejamento
Dividimos o projeto em pages(views) e a partir disto fizemos a componentização para dividir uniformemente as tarefas. 
O tempo proposto era terminar o projeto em 2 semanas. As entregas tiveram um turnover de 2 dias em média, de acordo com disponibilidade de cada membro. O tempo de sobra foi gasto para melhorar funcionalidades e aparência de itens da página.

## Funcionalidades
### Página de Login
Os usuários podem acessar a página de login para autenticar-se no sistema.
Há uma verificação de input para garantir que os campos de login estejam preenchidos corretamente antes de permitir a submissão do formulário.

#### Página de Produtos
Os usuários podem navegar pela página de produtos para visualizar os jogos e video games disponíveis para compra.
Há um banner com uma imagem de um jogo, tornando a página mais atraente.

#### Página de Detalhes do Produto
Os usuários podem acessar a página de detalhes do produto ao clicar em um item na página de produtos.
A página exibe informações detalhadas do jogo selecionado, como título, descrição, preço e cores.

#### Modal de Finalização de Compra
Ao clicar em "Adicionar ao Carrinho" na página de detalhes do produto, os usuários são redirecionados para uma página de modal.
O modal permite aos usuários escolher entre continuar com o pedido ou finalizar a compra.

#### Modal de Dados do Usuário
Ao clicar em "Finalizar Compra" no primeiro Modal, os usuários são redirecionados para outra página de modal onde são solicitadas informações pessoais, como nome, forma de pagamento, endereço de entrega, etc.

## Instalação e Execução
- Clone o repositório para sua máquina local.
- Navegue até o diretório do projeto e execute o comando ```npm install``` para instalar as dependências.
- Após a instalação, execute o comando ```npm run dev``` para iniciar a aplicação em seu navegador.
- Acesse a aplicação no navegador, utilizando a URL ```http://localhost:xxxx```, onde "xxxx" é a porta aberta em seu servidor localhost.

## Considerações Finais
Este projeto é apenas uma simulação de um e-commerce de jogos e video games, com funcionalidades básicas implementadas utilizando React JS. É uma aplicação em constante evolução, com potencial para adição de mais recursos, como integração com APIs de pagamento, gerenciamento de estado mais avançado, entre outros. Fique à vontade para contribuir ou utilizar este projeto como base para o desenvolvimento de sua própria aplicação de comércio eletrônico.

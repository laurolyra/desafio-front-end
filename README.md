# Desafio programação - para vaga Front-end
# Descrição do projeto

Com esta API([pokeapi v2](https://pokeapi.co/docsv2/#)) em mãos, foi criada uma interface WEB para exibir as informações dos pokémons capturados.

A referida aplicação se valeu de react para a criação dos componentes e redux pára gerenciamento global do estado da aplicação - possuindo componentes, inclusive, com seu pŕoprio estado.

A página foi dividida em duas rotas, sendo uma da busca pelo pokemon e outra para a apresentação dos pokemons capturados em pokedex. React router foi utilizado para o gerenciamento das rotas.

Para conferir a cobertura de testes, basta instalar as dependências conforme instruções abaixo e, em seguida, executar `npm run test-coverage`

# Instruções para execução

1. Clone este repositório

`git clone git@github.com:laurolyra/desafio-front-end.git`

2. Vá para a pasta do projeto

`cd desafio-front-end`

3. Instale as dependências

`npm install`

4. Inicie a aplicação

`npm start`

# Funcionalidades implementadas na aplicação:

1. Filtro para buscar os pokémons por nome ou número - a busca deve ser feita pelo número ou pelo nome exato;
2. Botão com adição do pokemon a uma pokedex - e por ser uma pokedex, é possível adicionar vários pokemons da mesma espécie, porém cada um terá seu ID único na exibição de seu card - podendo ser excluído individualmente.
3. Listagem dos pokémons que foram adicionados a Pokédex
4. Exibição de detalhes do personagem adicionados a Pokédex como: 
    - Nome
    - Imagem dando a opção do usuário fazer upload de sua própria imagem, substituindo a que é entregue via API
    - Peso
    - Tamanho
    - Lista de tipos
    - Lista de habilidades
    - Estatísticas de velocidade
    - Defesa
    - Ataque
    - Hp
    - Cada passo de sua evolução
    - Ao clicar em um item da lista de tipos, mostrar todos os pokémons daquele mesmo tipo, inclusive os que ainda não estão adicionados a Pokédex
    - Ao clicar em um item da lista de habilidades mostrar o `short_effect` da mesma
5. Exclusão dos pokémons que foram adicionados a Pokédex.

---

# Pontos de melhoria
Há consciência de que a aplicação foi entregue como um MVP (_minimum value product_), por isso é importante frisar algumas melhorias já detectadas - que podem ser adotatas ao longo do desenvolvimento da aplicação. São elas:

1. Melhorar a cobertura de testes;
2. Aprimorar a estilização dos componentes;
3. Tornar o código de construção das evoluções dos pokemons mais limpa;
4. Aplicar mudanças de estilização sugeridas no ESlint (instalado na aplicação);
5. Adotar uma arquitetura mais simples para gerenciamento de estado - como o ContextAPI
6. Refatorar o componente PokemonAllInfo, que recebe muitas funções similares e trabalha com o estado local de uma forma não muito perfirmática.
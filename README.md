# Projeto_Calculadora_com_React.js
Projeto que tem por objetivo criar uma Calculadora simples que realiza cálculos do tipo de multiplicação, divisão, soma e subtração.O único framework utilizado nesse pequeno projeto foi o React.js. 

### ***Adendo***
O código está completamente em inglês para que seja possível o treinamento da leitura e escrita do código por parte do desenvolver que o produziu, assim realizando a construção de um código como normalmente é compartilhado pela internet. Por enquanto o read.me estará em português mas será escrito uma versão totalmente em inglês em breve.

------------------------------------------------------------------------------------------------------
# CSS utilizado:

O layout utilizado para estruturar os botões da calculadora foi o CSS.Grid, podendo assim organizar cada botões em colunas iguais, já o display que apresenta os dígitos da calculadora foi utilizado o layout do tipo flexbox para organizar a maneira com que os números são apresentados.

Com CSS.Grid foram utilizado alguns comandos como :

* *"grid-column: span"* - Para inserir a quantidade de colunas que devem ser criadas em determinada linha;
* *"grid-template-columns: repeat()"* - Utilizado para inserir a quantidade de colunas e o quanto ela deve ser ocupada em cada linha;
* *"grid-template-row: fr"* - Especifica o tamanho que cada item dentro de uma linha presente no container deve ter, utilizada juntamente com a unidade de medida "fr" que representa uma fração do espaço disponível no container do grid.

Ja em flexbox são utilizados comandos como:
* *"justify-content"* - Alinha a posição dentro do container;
* *"align-items"* - Alinha os itens de acordo com o eixo do container, tendo diferença caso os itens estejam em colunas ou linhas.

Também foi utilizado a criação de duas variáveis, utilizando a classe ":root" dentro do css para setar o "background-color" e o "border" de alguns botões da calculadora.

Por fim, é utilizado o a fonte RobotoMono Thin, onde é definida através de uma "at-rule" para especificar fontes a "font-face".

------------------------------------------------------------------------------------------------------
# React e Vanilla Javascript utilizados:

## Folder: Main - File: Calculator.jsx / Resumo sobre o código

Agora focando com o código trabalho no react, é seguido a mesma organização para com todo o código criado utilizando o framework, separando partes do projeto em componentes para ir organizando de forma limpa as diferentes partes do projeto, nesse caso foi separado um arquivo "main" para trabalhar a Calculadora de modo geral, e os demais componentes como botões e display foram colocados em uma pasta própria de nome ***"components"*** .

Nesse projeto são criados componentes funcionais e por estado, porém como dito no curso, não convém criar todos os componentes com estado, pois acabaria resultando no aumento da dificuldade em algo que não necessáriamente é obrigatório. O único componente criado por estado, é o componente ***"Calculator.jsx"*** em que é focado a criação da lógica da calculadora e que será explicado nesse read.me de forma mais detalhada.

Enfim, indo para o código própriamente dito, inicialmente para fazer com que a calculadora tenha um estado inicial para retornar toda fez que reiniciada, é criado um objeto de nome ***"inicialState"***

O objeto é estruturado pelas propriedades:
* **"displayValue = '0' "** - String que representa o valor que é apresentado no display;
* **"clearDisplay = false"** - Propriedade desiguinada para informar se o display e o array de valores "values" estão "zerados";
* **"operation = null"** - String da operação matemática que esta sendo utilizada para realizar o cálculo;
* **"values = [0,0]"** - Array de apenas duas posições que representa o conjunto de números que devem ser cálculados;
* **"current = 0"** - Representa a posição em que o array está trabalhando no momento.

Em seguida são criados três métodos:
* **clearMemory()** - Método designado para reiniciar a calculadora a um estado inicial;
* **setOperation(operation)** - Método utilizado para setar as operações que serão realizadas na cálculadora;
* **addDigit(digit)** - Método criado para que sejá possível visualizar os números escolhidos na cálculadora, trabalhando também com o array desses números e convertendo as strings para númerais.

Assim, depois de criados os métodos, para que seja possível trabalhar com eles, é inserido um constructor que referência cada uma das funcções criadas usando o método "Bind", podendo assim referênciar as funções com o "this".

No fim, dentro do método **"render()"**, são inseridos os componentes importados, sendo eles o componente *botão* e *display*.

## Folder: Components - Files: Button.jsx e Display.jsx / Resumo sobre o código

Nos componentes criados para estruturar os *botões* e *display* não são muito complexos como o componente principal *"Calculator"*. Mas passando e explicando o papel de cada componente, os dois tópicos a seguir apresentarão a responsabilidade de cada um :

* *"Button"* - O componente implementa o botão e insere as condicionais para que, caso o botão esteja vinculado a classe da condicional, ele ocupe um espaço maior na tela ou altera de cor;

* *"Display* - Insere um "className" para que haja uma classe em que seja desenvolvido um display.

------------------------------------------------------------------------------------------------------

### FIM






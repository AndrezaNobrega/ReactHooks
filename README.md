In the project directory, you can run:

### `npm start`


# Tópicos estudados neste projeto:

## Use State:

const [state, setState] = useState(initialState)


## Use Effect:

mudamos um dados na aplicação, isso irá implicar na mudança de outro dado

## Use Ref:

Um objeto possui uma propriedade current 
Use ref cria um objeto mutavel, pois seus atributos internos serão mutaveis. Enquanto estivermos renderizando o msm objeto, temos a mesma referência.

- UseRef x UseState
useState: quando mudamos o estado, automaticamente é renderizado, mas no useref n

## Use Memo:

UseMemo retorna um valor memorizado. 
Por exemplo, um dado calculado é guardado em cache, portanto ele não precisará ser calculado novamente.

Por exemplo, se temos um cálculo muito custoso que será executado todas as vezes que renderizarmos, ele pode ser guardado usando o UseMemo e não será necessário fazer esse cálculo todas as vezes que renderizarmos.

No exemplo que foi escrito, temos que a+b demora 2 segundos para ser executado, também podemos alterar o valor c dentro do input. Como o valor c não tem nenhuma conexão com o resultado de a+b, ele pode ser guardado, para isso, não precisaremos efetuar o cálculo quando rederizarmos novamente. Ele só irá alterar, quando as dependências que foram inseridas como parâmetros forem mexidas.

## Use Callback:

Nesse caso, temos uma função em cache

## Context API:

 - Comunicação entre componentes por meio da comunicação direta e indireta.

 - Uma estrutura que será passada para todos componentes em uma árvore, sem que seja necessária a comunicação direta ou indireta.

 Quando se tem uma árvore muito grande de componentes, é inviável que essa comunicação seja feita totalmente por meio da comunicação direta/indireta, devido a quantidade de componentes que podem ter entre estes. Traz uma complexidade desnecessária para a aplicação.


 - Uso no exemplo
    --> Criamos um contexto a partir do CreateContext
    --> Importamos ele no nível mais alto da aplicação
            - Assim passamos as informações para todos os componentes
    - Para modificar o valor, precisamos alterar o contexto inteiro.

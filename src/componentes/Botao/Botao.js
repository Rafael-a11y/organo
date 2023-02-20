import './Botao.css';
/*texto é a variável criada em Formulario.js para definir o texto do nosso botão
A propriedade children é usada quando um elemento como o botão possui vários elementos dentro dele, como uma imagem além
do texto, acontece que a linguagem usada aqui não é html e sim JSX que é semelhante ao html mas não é html, em html,
a definição do botão ficaria assim <Botao>Gerar card</Botao>, mas isso não é permitido em JSX, não é permitido à 
princípio, com a propriedade {props.children} você consegue defnir outras tags de parâmetro, ou seja a função irá retornar
um <button> e qualquer coisa que estiver dentro dele, repare que no módulo Formulario.js foi passado uma String
'Gerar card' de parâmetro para o módulo <Botao/> como é feito em HTML puro: <Botao>Criar Card</Botao>*/
const Botao = (props) =>
{
    return (
        <button className = 'botao'>
            {props.children}
        </button>
    );
}

export default Botao;
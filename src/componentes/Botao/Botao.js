import './Botao.css';
/*texto é a variável criada em Formulario.js para definir o texto do nosso botão*/
const Botao = (props) =>
{
    return (
        <button className = 'botao'>
            {props.texto}
        </button>
    );
}

export default Botao;
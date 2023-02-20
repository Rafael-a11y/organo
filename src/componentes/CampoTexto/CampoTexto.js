import './CampoTexto.css'
//Atribuindo uma função à uma constante, componentes React sempre devem começar com letra maiúscula
const CampoTexto = (props) => 
{
    /*onChange() acontece sempre que o elemento é mudado, no caso do input, a cada dígito que o usuário fizer no input,
      este evento é ativado e chama aoDigitado, evento representa o evento, target é o elemento que está ligado à ele,
      neste caso o input e value é o valor*/
    const aoDigitado = (evento) =>
    {
        props.aoAlterado(evento.target.value);
    }

    /*Faz interpolação de String, atente-se às crases. Interpolação de String significa que idependente da string usada
    para prencher o placeholder, todas terão '...' concatenadas ao seu fim.*/
    const placeholderModificada = `${props.placeholder}...`

    /*return de várias linhas return (), retorna uma rótulo 'Nome' com um campo de entrada, a propriedade 
    className='campo-texto' serve para definir a regra declarada no CampoTexto.css
    props um parâmetro passado inplícitamente pelo React para a nossa função, em <label></label>, usar 
    {props.label} faz com que a String de <label> seja passada de parâmetro quando o componente <CampoTexto/> 
    for chamado no App.js, da seguinte forma <CampoTexto label='StringParametro'/>, entenda, uma tag html está
    sendo preenchida por parâmetro JavaScript, o mesmo serve para {props.placeholder}, faz com que a String de 
    <input placeholder=''/> seja preenchida pela variável placeholder em App.js
    Required torna o campo obrigatório, recebe um valor booleano.  */
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value = {props.valor} onChange={aoDigitado} required = {props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}
//Exporta a constante que tem dentro de sí uma função
export default CampoTexto;
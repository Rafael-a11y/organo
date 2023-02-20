import './CampoTexto.css'
//Atribuindo uma função à uma constante, componentes React sempre devem começar com letra maiúscula
const CampoTexto = (props) => 
{
    //Faz interpolação de String
    const placeholderModificada = `${props.placeholder}...`
    /*return de várias linhas return (), retorna uma rótulo 'Nome' com um campo de entrada, a propriedade 
    className='campo-texto' serve para definir a regra declarada no CampoTexto.css
    props um parâmetro passado inplícitamente pelo React para a nossa função, em <label></label>, usar 
    {props.label} faz com que a String de <label> seja passada de parâmetro quando o componente <CampoTexto/> 
    for chamado no App.js, da seguinte forma <CampoTexto label='StringParametro'/>, entenda, uma tag html está
    sendo preenchida por parâmetro JavaScript, o mesmo serve para {props.placeholder}, faz com que a String de 
    <input placeholder=''/> seja preenchida pela variável placeholder em App.js  */
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}
//Exporta a constante que tem dentro de sí uma função
export default CampoTexto;
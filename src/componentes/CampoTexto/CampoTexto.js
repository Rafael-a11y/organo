import './CampoTexto.css'
//Atribuindo uma função à uma constante, componentes React sempre devem começar com letra maiúscula
const CampoTexto = () => 
{
    //return de várias linhas return (), retorna uma rótulo 'Nome' com um campo de entrada, a propriedade 
    //className='campo-texto' serve para definir a regra declarada no CampoTexto.css
    return (
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder='Digite o seu nome'/>
        </div>
    )
}
//Exporta a constante que tem dentro de sí uma função
export default CampoTexto;
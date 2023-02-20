import './ListaSuspensa.css';

/*Dentro da tag <select></select> recebemos de parâmetro um props.itens.map(), a função map() define que para cada item
da lista, seja retornado um <option></option> deste item: map(item => <option>{item}</option>), por se tratar de um map,
para cada elemento <option>, teremos uma key, que será de mesmo valor do <option>: 
return <option key = {item}>{item}</option>*/
const ListaSuspensa = (props) =>
{
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
             <select onChange={evento => props.aoAlterado(evento.target.value)} 
             required = {props.required} value = {props.value}>
                {props.itens.map(item =>
                    {
                        return <option key = {item}>{item}</option>
                    })}
             </select>
        </div>
    )
}

export default ListaSuspensa;
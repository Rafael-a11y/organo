import './CaixaSelecao.css';
const CaixaSelecao = (props) =>
{
    return (
        <div className="caixa-selecao">
            <label>{props.label}</label>
            <select>
                <option>Programação</option>
                <option>Front-End</option>
                <option>Data Science</option>
                <option>Devops</option>
                <option>UX e Design</option>
                <option>Mobile</option>
                <option>Inovação e Gestão</option>
            </select>
        </div>
    )
}

export default CaixaSelecao;
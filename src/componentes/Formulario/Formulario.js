import CampoTexto from '../CampoTexto/CampoTexto'; // ../ significa diretório anterior
import './Formulario.css';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
const Formulario = () => {
    const times = 
    [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ];

const aoSalvar = (evento) =>
{
    /*preventDefault evita o comportamento padrão de envio do formulário, em html, isso seria feito faznendo onSubmit()
    retornar falso*/
    evento.preventDefault();
    console.log("Formulário submetido");
}

    /*onSubmit = {} é um evento Javascript que significa ao enviar, dispara uma requisição post, com evento onSubmit
     é possível aplicar verificações como verificar se algum campo obrigatório está nulo etecetera.*/
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" obrigatorio = {true} placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" obrigatorio = {true} placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label = "Time" obrigatorio = {true} itens = {times}/>
                <Botao>
                    Criar card
                </Botao>
                {/*<CaixaSelecao label="Time"/>*/}
            </form>
        </section>
    );
}

export default Formulario;
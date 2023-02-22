import CampoTexto from '../CampoTexto/CampoTexto'; // ../ significa diretório anterior
import './Formulario.css';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react';

const Formulario = (props) => {
    const times = 
    [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

const aoSalvar = (evento) =>
{
    /*preventDefault evita o comportamento padrão de envio do formulário, em html, isso seria feito faznendo onSubmit()
    retornar falso*/
    evento.preventDefault();
    //Importante salientar que aqui é feito implícitamente um mapeamento do tipo: nome: nome, cargo: cargo... 
    props.aoColaboradorCadastrado({
        nome, 
        cargo, 
        imagem, 
        time});
}

    /*onSubmit = {} é um evento Javascript que significa ao enviar, dispara uma requisição post, com evento onSubmit
     é possível aplicar verificações como verificar se algum campo obrigatório está nulo etecetera.*/
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    label="Nome" 
                    obrigatorio = {true} 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado = {valorP => setNome(valorP)}
                    />
                <CampoTexto label="Cargo" 
                    obrigatorio = {true} 
                    placeholder="Digite seu cargo" 
                    valor = {cargo}
                    aoAlterado = {valorP => setCargo(valorP)} /*valorP é apenas um parâmetro*/
                    />
                <CampoTexto label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor = {imagem}
                aoAlterado = {valorP => setImagem(valorP)}
                />
                <ListaSuspensa label = "Time" 
                    obrigatorio = {true} 
                    itens = {times}
                    valor = {time}
                    aoAlterado = {valorP => setTime(valorP)}
                />
                <Botao>
                    Criar card
                </Botao>
                {/*<CaixaSelecao label="Time"/>*/}
            </form>
        </section>
    );
}

export default Formulario;
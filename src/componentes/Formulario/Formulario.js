import CampoTexto from '../CampoTexto/CampoTexto'; // ../ significa diretório anterior
import './Formulario.css';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react';
const Formulario = () => {
    const times = 
    [
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
    console.log("Formulário submetido => ", nome, cargo, imagem, time);
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
                    aoAlterado = {valor => setNome(valor)}
                    />
                <CampoTexto label="Cargo" 
                    obrigatorio = {true} 
                    placeholder="Digite seu cargo" 
                    valor = {cargo}
                    aoAlterado = {valor => setCargo(valor)}
                    />
                <CampoTexto label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa label = "Time" 
                    obrigatorio = {true} 
                    itens = {times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
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
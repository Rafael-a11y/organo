import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';
import CaixaSelecao from './componentes/CaixaSelecao/CaixaSelecao';
import Formulario from './componentes/Formulario/Formulario';
import { useState } from 'react';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) =>
  {
    console.log(colaborador);
  }

  return (
    <div className="App">
      {/*Importa a função Banner para otbter a imagem do banner e o texto alternativo, embora se assemelhe com uma 
      tag html, Banner e CampoTexto são componentes React que criamos. Quando se passa um passa uma propriedade
      para o elemento React, a função da tag recebe uma propriedade de parâmetro na função CampoTexto*/}
      <Banner/>
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
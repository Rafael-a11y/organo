import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      {/*Importa a função Banner para otbter a imagem do banner e o texto alternativo, embora se assemelhe com uma 
      tag html, Banner e CampoTexto são componentes React que criamos*/}
    <Banner/>
    <CampoTexto/>
      
    </div>
  );
}

export default App;

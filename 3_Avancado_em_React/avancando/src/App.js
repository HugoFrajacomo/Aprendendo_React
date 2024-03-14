import './App.css';
import img2 from "./assets/img2.webp"; // Importando a imagem como uma variável
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
        <h1>Avançando em React</h1>
        <div>
          <img src="/img1.png" alt="logotipo do react" />
        </div> {/*Dessa forma as imagens estão disponíveis direto na página public */}

        <div>
          <img src={img2} alt="imagem de teste" /> {/* Forma de chamar a variável com a img */}
        </div>
        <ManageData></ManageData>
    </div>
  );
}

export default App;

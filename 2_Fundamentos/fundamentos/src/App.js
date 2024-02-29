//Componentes
import FirstComponent from './Components/FirstComponent';
import TemplateExpressions from './Components/TemplateExpressions';
//Folha de estilos
import './App.css';
import MyComponent from './Components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
    </div>
  );
}

export default App;

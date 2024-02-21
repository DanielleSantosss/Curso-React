import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from  './components/Frase';
import List from  './components/List'


function App() {

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <h1>Testando CSS</h1>
      <SayMyName nome="Jorge"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Jorge" sobrenome="Batista" idade="35" profissao="Pedreiro" />
      <List/>
    </div>
  );
}

export default App;

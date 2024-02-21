import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <SayMyName nome="Jorge"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Jorge" sobrenome="Batista" idade="35" profissao="Pedreiro" />
    </div>
  );
}

export default App;

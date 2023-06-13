import './App.css';
import { Cabecalho } from './components/Cabecalho';
import { Container } from './components/Container';
import { Rodape } from './components/Rodape';
import { Tabela } from './components/Tabela';
import { Titulo } from './components/Titulo';
import { useDadosConsulta } from './useDadosConsulta';

function App() {
  useDadosConsulta()
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Area Administrativa</Titulo>
        <Tabela />
      </Container>
      <Rodape />
    </>
  );
}

export default App;

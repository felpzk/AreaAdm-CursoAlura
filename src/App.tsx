import './App.css';
import { Avaliacao } from './components/Avaliacao';
import { Cabecalho } from './components/Cabecalho';
import { Container } from './components/Container';
import { Grafico } from './components/Grafico';
import { Rodape } from './components/Rodape';
import { Tabela } from './components/Tabela';
import { Titulo } from './components/Titulo';
import { useDadosConsulta } from './useDadosConsulta';
import { useDadosProfissional } from './useDadosProfissional';

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta()
  const { dados: profissionais , erro: profissionaisErro } = useDadosProfissional()

  if(consultasErro || profissionaisErro) {
    console.log('Ocorreu um erro na requisiçao')
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Area Administrativa</Titulo>
        <Tabela consultas={consultas}/>
        <Grafico profissionais={profissionais} consultas={consultas}/>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;

import './App.css';
import FirstComponent from './components/FirstComponent';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Olá React!</h2>
      <FirstComponent/>
      <Images/>
      <List/>
      <RenderCond x = {8} y = {10}/>
      <Fragment/>
      <Container>
        <h1>Este é filho container</h1>
      </Container>
    </div>
  );
}

export default App;

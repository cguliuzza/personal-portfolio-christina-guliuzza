// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Accordion from './components/accordion/Accordion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <p>Christina Guliuzza</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <Accordion />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <a
          className="App-link"
          href="https://bellKevin.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kevin Bell
        </a>
        <br></br>
        <img src="https://raw.githubusercontent.com/bell-kevin/Kevin-Bell/main/kevinBell.png" />
        
       
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

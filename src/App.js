import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="https://raw.githubusercontent.com/bell-kevin/Kevin-Bell/main/kevinBell.png" />
        <p>
          Kevin Bell
        </p>
        <a
          className="App-link"
          href="https://bellKevin.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>
    </div>
  );
}

export default App;

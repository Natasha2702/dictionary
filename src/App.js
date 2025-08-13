import logo from './logo-shecodes.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className='App-container'>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary/>
        <footer className='App-footer text-center'>
          coded by SheCodes
        </footer>
      </main>
    </div>
    </div>
  );
}



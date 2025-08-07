import logo from "./logo-shecodes.png"
import './App.css';
import Dictionary from "./Dictionary.js"


function App() {
  return (
<div className="container">
    <div className="App">
<header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
</header>

<main>
        <Dictionary/>
</main>

<footer className="App-footer">
  coded by Shecodes
</footer>

    </div>
</div>
  ); 
}

export default App;

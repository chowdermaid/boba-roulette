import logo from './logo.svg';
import './App.css';
import data from '../src/data.json';

function App() {
  const keys = Object.keys(data)
  console.log(keys);
  const stores = keys.map((store) =>
    <li key={store.toString()}>
      {store}
    </li>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{stores}</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

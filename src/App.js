import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header.component';

import { BrowserRouter as Router,
          Switch,
          Route, 
          Link
        } from "react-router-dom"

// import { Router, Route, Switch } from 'react-router'

function App() {
  return (
    <div className="App">
      <Header />

    </div>
  );
}

export default App;

/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Calculator } from './components/Calculator';

export class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1>Math Magicians</h1>
        <Calculator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to our page!</h2>
        <p>
          This is about dancing with real numbers,
          to speak in one language of math.
        </p>
        <p>
          Do you remember when computers were this?
          Homage to IBM and CERN.
        </p>
      </main>
      <nav>
        <Link to="/about">Quote</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          “The basic theory in twistor theory is not to add extra dimensions.” —
          Roger Penrose
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default App;

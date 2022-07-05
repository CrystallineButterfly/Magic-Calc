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
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="about"> Quote</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="calculator" element={<Calculator />} />
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
          This is about dancing with real numbers, to speak in one language of
          math.
        </p>
        <p>
          Do you remember when computers where this? Homage to IBM and CERN. In
          1642, the first true “calculator” was invented: one that performed
          calculations through a clockwork-type of mechanism. The Pascal
          calculator, enabled by a French mathematician, Blaise
          Pascal, was lauded for attempting arithmetic calculations previously
          thought impossible. Even though the famous antikyera mechanism, is much better than this,
          and is anceint! But unfortunately in modern times, they were difficult to produce
          and very few were ever made, intially. The mechanical calculator was then enabled
          by Thomas de Colmar in the mid-nineteenth century, and by subsequent
          others, which were easier to produce, but extremely large and bulky, not at
          all the pocket calculators we know today, or anywhere close...
          to the complexity of the antikyera mechanism.
        </p>
      </main>
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
    </>
  );
}

// function MainPage() {
//   return (
//     <>
//       <main>
//         <h2>Calculator</h2>
//         <p>
//           This is a calculator that can do basic math.
//         </p>
//       </main>
//       <nav>
//         <Link to="mainpage">MainPage</Link>
//       </nav>
//     </>
//   );
// }
export default App;

/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import ReactDOM from 'react-dom';
import Calculator from './components/calculator';
import './index.css';

function App() {
  /* eslint no-eval: 0 */
  return <Calculator />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);

export default App;

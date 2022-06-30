import React from 'react';
import calculate from '../logic/calculate';

export class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  calculationBtn = (x) => {
    this.setState((s) => calculate(s, x));
  };

  render() {
    const { next, operation, total } = this.state;
    return (
      <div className="Calculator">
        <div className="display">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="operators">
          <button type="button" onClick={() => this.calculationBtn('AC')}>
            AC
          </button>
          <button type="button" onClick={() => this.calculationBtn('+/-')}>
            +/-
          </button>
          <button type="button" onClick={() => this.calculationBtn('%')}>
            %
          </button>
          <button
            className="orange"
            type="button"
            onClick={() => this.calculationBtn('÷')}
          >
            ÷
          </button>
        </div>
        <div className="first-digits">
          <button type="button" onClick={() => this.calculationBtn('7')}>
            7
          </button>
          <button type="button" onClick={() => this.calculationBtn('8')}>
            8
          </button>
          <button type="button" onClick={() => this.calculationBtn('9')}>
            9
          </button>
          <button
            type="button"
            className="orange"
            onClick={() => this.calculationBtn('x')}
          >
            x
          </button>
        </div>
        <div className="second-digits">
          <button type="button" onClick={() => this.calculationBtn('4')}>
            4
          </button>
          <button type="button" onClick={() => this.calculationBtn('5')}>
            5
          </button>
          <button type="button" onClick={() => this.calculationBtn('6')}>
            6
          </button>
          <button
            type="button"
            className="orange"
            onClick={() => this.calculationBtn('+')}
          >
            +
          </button>
        </div>
        <div className="third-digits">
          <button type="button" onClick={() => this.calculationBtn('1')}>
            1
          </button>
          <button type="button" onClick={() => this.calculationBtn('2')}>
            2
          </button>
          <button type="button" onClick={() => this.calculationBtn('3')}>
            3
          </button>
          <button
            type="button"
            className="orange"
            onClick={() => this.calculationBtn('-')}
          >
            -
          </button>
        </div>
        <div className="bottom-digits">
          <button
            type="button"
            className="wide-button"
            onClick={() => this.calculationBtn('0')}
          >
            0
          </button>
          <button type="button" onClick={() => this.calculationBtn('.')}>
            .
          </button>
          <button
            type="button"
            className="orange"
            onClick={() => this.calculationBtn('=')}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;

// this is the more efficent way of doing it- Below
// /* eslint-disable react/button-has-type */
// /* eslint-disable no-console */
// import React, { useState } from 'react';
// import '../index.css';

// function Calculator() {
//   /* eslint no-eval: 0 */

//   const [input, setInput] = useState('');
//   const calcBtns = [];
//   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '%'].forEach((item) => {
//     calcBtns.push(
//       <button
//         onClick={(e) => {
//           setInput(input + e.target.value);
//         }}
//         value={item}
//         key={item}
//       >
//         {' '}
//         {item}
//       </button>,
//     );
//   });

//   return (
//     <div className="wrapper">
//       {' '}
//       <div className="show-input">{input}</div>
//       <div className="digits flex">{calcBtns}</div>
//       <div className="modifiers subgrid">
//         {/* clear button */}

//         <button onClick={() => setInput(input.substr(0, input.length - 1))}>
//           Clear
//         </button>

//         {/* clear all */}
//         <button onClick={() => setInput('')} value="">
//           AC
//         </button>
//       </div>
//       <div className="operations subgrid">
//         {/* add button */}
//         <button onClick={(e) => setInput(input + e.target.value)} value="+">
//           +
//         </button>

//         {/* minus btn */}
//         <button onClick={(e) => setInput(input + e.target.value)} value="-">
//           {' '}
//           -
//           {' '}
//         </button>

//         <button onClick={(e) => setInput(input + e.target.value)} value="*">
//           {' '}
//           *
//         </button>

//         <button onClick={(e) => setInput(input + e.target.value)} value="/">
//           {' '}
//           /
//         </button>
//         {/* "=" btn */}
//         <button
//           onClick={() => {
//             try {
//               setInput(
//                 String(eval(input)).length > 3
//                   && String(eval(input)).includes('.')
//                   ? String(eval(input).toFixed(4))
//                   : String(eval(input)),
//               );
//             } catch (e) {
//               console.log(e);
//             }
//           }}
//           value="="
//         >
//           =
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Calculator;

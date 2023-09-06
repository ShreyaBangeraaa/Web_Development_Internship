// import React, { useState } from "react";

// import Wrapper from "./Wrapper";
// import Screen from "./Screen";
// import ButtonBox from "./ButtonBox";
// import Button from "./Button";

// const btnValues = [
//   ["AC","√" ,"%", "/"],
//   [1, 2, 3, "X"],
//   [4, 5, 6, "-"],
//   [7, 8, 9, "+"],
//   [0, ".", "="],
// ];

// const toLocaleString = (num) =>
//   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

// const removeSpaces = (num) => num.toString().replace(/\s/g, "");

// const App = () => {
//   let [calc, setCalc] = useState({
//     sign: "",
//     num: 0,
//     res: 0,
//   });

//   const numClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     if (removeSpaces(calc.num).length < 16) {
//       setCalc({
//         ...calc,
//         num:
//           calc.num === 0 && value === "0"
//             ? "0"
//             : removeSpaces(calc.num) % 1 === 0
//             ? toLocaleString(Number(removeSpaces(calc.num + value)))
//             : toLocaleString(calc.num + value),
//         res: !calc.sign ? 0 : calc.res,
//       });
//     }
//   };

//   const commaClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
//     });
//   };
  
//   const signClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       sign: value,
//       res: !calc.res && calc.num ? calc.num : calc.res,
//       num: 0,
//     });
//   };

//   const sqrtClickHandler = () => {
//     const num = parseFloat(removeSpaces(calc.num));
    
//     // Check if the input number is non-negative
//     if (num >= 0) {
//       setCalc({
//         ...calc,
//         num: toLocaleString(Math.sqrt(num)),
//         res: 0, // Clear the result
//         sign: "", // Clear any previous operation
//       });
//     } else {
//       // Handle negative input (optional)
//       setCalc({
//         ...calc,
//         num: "Invalid input",
//         res: 0,
//         sign: "",
//       });
//     }
//   };
//   const equalsClickHandler = () => {
//     if (calc.sign && calc.num) {
//       const math = (a, b, sign) =>
//         sign === "+"
//           ? a + b
//           : sign === "-"
//           ? a - b
//           : sign === "X"
//           ? a * b
//           : a / b;

//       setCalc({
//         ...calc,
//         res:
//           calc.num === "0" && calc.sign === "/"
//             ? "Can't divide with 0"
//             : toLocaleString(
//                 math(
//                   Number(removeSpaces(calc.res)),
//                   Number(removeSpaces(calc.num)),
//                   calc.sign
//                 )
//               ),
//         sign: "",
//         num: 0,
//       });
//     }
//   };

  

//   const percentClickHandler = () => {
//     let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
//     let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

//     setCalc({
//       ...calc,
//       num: (num /= Math.pow(100, 1)),
//       res: (res /= Math.pow(100, 1)),
//       sign: "",
//     });
//   };

//   const resetClickHandler = () => {
//     setCalc({
//       ...calc,
//       sign: "",
//       num: 0,
//       res: 0,
//     });
//   };

//   return (
//     <Wrapper>
//       <Screen value={calc.num ? calc.num : calc.res} />
//       <ButtonBox>
//         {btnValues.flat().map((btn, i) => {
//           return (
//             <Button
//               key={i}
//               className={btn === "=" ? "equals" : ""}
//               value={btn}
//               onClick={
//                 btn === "AC"
//                   ? resetClickHandler
//                   : btn === "%"
//                   ? percentClickHandler
//                   : btn === "="
//                   ? equalsClickHandler
//                   : btn === "/" || btn === "X" || btn === "-" || btn === "+"
//                   ? signClickHandler
//                   : btn === "."
//                   ? commaClickHandler
//                   : btn === "√" // Add a button for square root
//                   ? sqrtClickHandler
//                   : numClickHandler
//               }
//             />
//           );
//         })}
//       </ButtonBox>
//     </Wrapper>
//   );
// };

// export default App;



import React, { useState } from "react";
import "./App.css"; // Import your CSS file
import { evaluate, round, pow } from "mathjs";

import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

const btnValues = [
  ["AC", "√", "X^2", "/"],
  [1, 2, 3, "X"],
  [4, 5, 6, "-"],
  [7, 8, 9, "+"],
  [0, ".", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const App = () => {
  const [calc, setCalc] = useState({
    formula: "", // Store the user-entered expression
    result: 0,   // Store the calculation result
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.formula.length < 16) {
      setCalc({
        ...calc,
        formula:
          calc.formula === "0" && value === "0"
            ? "0"
            : calc.formula % 1 === 0
            ? calc.formula + value
            : calc.formula + value,
        result: 0,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      formula: !calc.formula.toString().includes(".") ? calc.formula + value : calc.formula,
      result: 0,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    // Check if the value is 'X' or '*' for multiplication
    const sign = value === 'X' ? '*' : value;
  
    setCalc({
      ...calc,
      formula: calc.formula + sign,
      result: 0,
    });
  };
  

  const sqrtClickHandler = () => {
    const num = parseFloat(removeSpaces(calc.formula));
  
    // Check if the input number is non-negative
    if (num >= 0) {
      try {
        // Use the Math.sqrt() function to calculate the square root
        const result = Math.sqrt(num);
        setCalc({
          ...calc,
          formula: `√(${calc.formula})`, // Update the formula to show the square root
          result: toLocaleString(result),
        });
      } catch (error) {
        setCalc({
          ...calc,
          formula: "Error",
          result: 0,
        });
      }
    } else {
      setCalc({
        ...calc,
        formula: "Invalid input",
        result: 0,
      });
    }
  };
  

  const equalsClickHandler = () => {
    if (calc.formula) {
      try {
        // Use the eval function to evaluate the expression
        const result = eval(removeSpaces(calc.formula));
        setCalc({
          ...calc,
          result: toLocaleString(result),
        });
      } catch (error) {
        setCalc({
          ...calc,
          formula: "Error",
          result: 0,
        });
      }
    }
  };
  

  const squareClickHandler = () => {
    const num = parseFloat(removeSpaces(calc.formula));
  
    if (!isNaN(num)) {
      try {
        // Calculate the square of the input
        const result = pow(num, 2);
        setCalc({
          ...calc,
          formula: `(${calc.formula})^2`, // Update the formula to show the square operation
          result: toLocaleString(result),
        });
      } catch (error) {
        setCalc({
          ...calc,
          formula: "Error",
          result: 0,
        });
      }
    } else {
      setCalc({
        ...calc,
        formula: "Invalid input",
        result: 0,
      });
    }
  };
  

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      formula: "",
      result: 0,
    });
  };

  return (
    <Wrapper>
      <div className="formula">
        <Screen value={calc.formula} />
      </div>
      <div className="output">
        <Screen value={calc.result} />
      </div>
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "AC"
                  ? resetClickHandler
                  : btn === "X^2" 
                  ? squareClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : btn === "√" // Add a button for square root
                  ? sqrtClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;

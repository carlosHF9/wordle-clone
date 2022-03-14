import "./styles.css";
import { useReducer, createContext, useEffect } from "react";
import InitialState from "./app.initialstate";
import AppReducer from "./app.reducer";
import LettersRow from "./components/row/lettersrow.component";
import Button from "./components/button/button.component";
import KeyboardRow from "./components/keyboardrow/keyboardrow.component";


export const GlobalContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  function TryToGuess() {
    if (state.defaultMatrixTemplate[state.currentRow].includes("")) {
      dispatch({ type: "START_SHAKING" });

      setTimeout(() => {
        dispatch({ type: "STOP_SHAKING" });
      }, 1100);
    } else {
      dispatch({ type: "CONFIRM_GUESS" });
    }
  }

  useEffect(() => {
    console.log('fired')

    var regex = /[a-zA-Z\u00C0-\u00FF ]+/i;
    document.addEventListener("keyup", (e) => {
      if (regex.test(e.key) && e.key.length === 1 && e.key !== " ") {
        dispatch({
          type: "SET_CURRENTFIELDVALUE",
          newValue: e.key
        });

        dispatch({
          type: "NEXT_FIELD"
        })
      } else {

        if(e.key === 'Backspace') {
          dispatch({ type: "DELETE_VALUE" });
        }


        if(e.key === "ArrowRight") {
          dispatch({type: "NEXT_FIELD", keyType: "ArrowRight"});
        }

        if(e.key === "ArrowLeft" ) {
          dispatch({ type: "PREVIOUS_FIELD", keyType: "ArrowLeft" });
        }
        // switch (e.key) {
        //   case "Backspace":
        //     dispatch({ type: "DELETE_VALUE" });

        
        //   case "ArrowRight": 
        //     dispatch({type: "NEXT_FIELD", keyType: "ArrowRight"});

        //   case "ArrowLeft":
        //     dispatch({ type: "PREVIOUS_FIELD", keyType: "ArrowLeft" });


          
        //   default:
        //     return;
        // }
      }
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        dispatch,
        state,
        TryToGuess
      }}
    >
      {!state.isGameOver.status ? (
        <div
          className="App"

        >
          <h2 className="app-title">Deduletras!</h2>
          {state.defaultMatrixTemplate.map((row, index) => (
            <LettersRow validatedArray={state.currentValidatedArray} rowIndex={index} row={row} />
          ))}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
           justifyContent: 'center',
           gap: '10px',
           width: '100%'
          }}>
            {
              state.keyboard.map( row => (
                <KeyboardRow keyboardRow={row}/>
              ))
            }
          </div>
        </div>
      ) : state.isGameOver.win ? (
        <h1>You win</h1>
      ) : (
        <h1>You lose</h1>
      )}
    </GlobalContext.Provider>
  );
}

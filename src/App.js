import "./styles.css";
import { useReducer, createContext, useEffect } from "react";
import InitialState from "./app.initialstate";
import AppReducer from "./app.reducer";
import LettersRow from "./components/row/lettersrow.component";
import Button from "./components/button/button.component";

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
    var regex = /[a-zA-Z\u00C0-\u00FF ]+/i;
    document.addEventListener("keyup", (e) => {
      if (regex.test(e.key) && e.key.length === 1 && e.key !== " ") {
        dispatch({
          type: "SET_CURRENTFIELDVALUE",
          newValue: e.key
        });

        dispatch({
          type: "NEXT_FIELD"
        });
      } else {
        switch (e.key) {
          case "Backspace":
            dispatch({ type: "DELETE_VALUE" });

          case "ArrowLeft":
            dispatch({ type: "PREVIOUS_FIELD" })
          case "ArrowRight":
            dispatch({ type: "NEXT_FIELD" });
          default:
            return;
        }
      }
    });

    return () => {
      document.removeEventListener("keyup")
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        dispatch,
        state
      }}
    >
      {!state.isGameOver.status ? (
        <div
          className="App"
          onKeyPress={(e) => {
            console.log(e);
          }}
        >
          <h2>Find out the secret word</h2>
          {state.defaultMatrixTemplate.map((row, index) => (
            <LettersRow validatedArray={state.currentValidatedArray} rowIndex={index} row={row} />
          ))}
          <Button onClick={TryToGuess}>Try</Button>
        </div>
      ) : state.isGameOver.win ? (
        <h1>You win</h1>
      ) : (
        <h1>You lose</h1>
      )}
    </GlobalContext.Provider>
  );
}

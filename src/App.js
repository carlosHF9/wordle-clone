import "./styles.css";
import { useReducer, createContext, useEffect } from "react";
import InitialState from "./app.initialstate";
import AppReducer from "./app.reducer";
import LettersRow from "./components/row/lettersrow.component";
import KeyboardRow from "./components/keyboardrow/keyboardrow.component";
import keyboarskeys from "./keyboarskeys";
import Modal from "./components/modal/modal.component";
import Button from "./components/button/button.component";
import Header from "./components/header/header.component";
import Instructions from "./components/instructions/instructions.component";
import Statistics from "./components/statistics/statistics.component";



export const GlobalContext = createContext();

export default function App() {

  

  

  const [state, dispatch] = useReducer(AppReducer, JSON.parse(localStorage.getItem('deduletras')) ||InitialState);


  function Reset() {

    localStorage.removeItem('deduletras')
    window.location.reload()
  }

  function TryToGuess() {
    if (state.defaultMatrixTemplate[state.currentRow].includes("")) {
      dispatch({ type: "START_SHAKING" });

      setTimeout(() => {
        dispatch({ type: "STOP_SHAKING" });
      }, 1100);
    } else {
      dispatch({ type: "CONFIRM_GUESS" });
      dispatch({type: 'TRACK_LETTERSTATE'});
    }
  }

  useEffect(() => { 
    localStorage.setItem('deduletras', JSON.stringify({...state}))
    
  }, [state])
  
  

  
  

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
        })
      } else {
        dispatch({type: 'CURRENT_KEY', value: e.key})

        if(e.key === 'Backspace') {
          dispatch({ type: "DELETE_VALUE" });
        }


        if(e.key === "ArrowRight") {
          dispatch({type: "NEXT_FIELD", keyType: "ArrowRight"});
        }

        if(e.key === "ArrowLeft" ) {
          dispatch({ type: "PREVIOUS_FIELD", keyType: "ArrowLeft" });
        }
      }
    });
    
  }, []);

  useEffect( () => {
    if(state.currentKey === 'Enter') {
      TryToGuess()
      dispatch({type: 'CURRENT_KEY', value: ''})
    }  
  } ,[
    state
  ])
  

  return (
    <GlobalContext.Provider
      value={{
        dispatch,
        state,
        TryToGuess
      }}
    >
      
      <div
        className="App"

      >
        <Header />
        <Modal name="isStatisticsOpend">
          <Statistics />
        </Modal>
        <Modal name="isInstructionModalOpend">
          <Instructions />
        </Modal>
        <Modal name="isResultModalOpend">
          <h2>Você {state.isGameOver.win ? 'Ganhou' : 'Perdeu'}!</h2>
        </Modal>
        <div className="matrix">
          {state.defaultMatrixTemplate.map((row, index) => (
            <LettersRow validatedArray={state.currentValidatedArray} rowIndex={index} row={row} />
          ))}
        </div>
        
        
        <div style={{
          display: 'flex',
          alignSelf: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          marginTop: 'auto'
          
        }}>
          {/* <Button onClick={Reset}>
            Reset
          </Button> */}
          {
            
            keyboarskeys.map( row => (
              <KeyboardRow keyboardRow={row}/>
            ))
          }
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

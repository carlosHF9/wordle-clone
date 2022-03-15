import Letter from "../letter/letter.component"
import { useContext } from "react"
import { GlobalContext } from "../../App"


export default function KeyboardRow({keyboardRow}) {

    const { state, dispatch, TryToGuess } = useContext(GlobalContext)

    function InsertValueFromKeyboard(key, letter) {

        if(key === 'Backspace') {
            dispatch({type: 'DELETE_VALUE'})
        }

        else if(key === 'Enter') {
            TryToGuess()
        }

        else {
            dispatch({type: 'SET_CURRENTFIELDVALUE', newValue: letter})
            dispatch({type: "NEXT_FIELD"})
        }
                
    }

    return (
        <div style={{display: 'flex', gap: '5px', justifyContent: "center", width: '100%'}}>
            {keyboardRow.map( letter => (
                <Letter
                    status={ !letter.key ? state.letterKeyboardStatus[letter.value] : ''} 
                    value={letter.value} 
                    onClick={() =>InsertValueFromKeyboard(letter.key, letter.value )} 
                />
            ))}
        </div>
    )
}
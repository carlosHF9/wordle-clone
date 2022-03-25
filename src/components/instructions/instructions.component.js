import LetterInput from '../letterinput/letterinput.component'
import './style.css'



export default function Instructions() {




    return (
        <div className="instructions-container">
            <p>Adivinhe a palavra em até seis tentativas.</p>
            <p>Cada tentativa deve ter uma palavra válida de 5 letras. Aperte enter para confirmar.</p>
            <p>Depois de cada tentativa, a cor dos blocos redondos mudar para mostrar o quão perto a sua tentativa esteve da palavra.</p>
            <div className="examples">
                <h2>Example</h2>
            </div>
            <div className="word-try">
                <LetterInput value="C" letterStatus="isRight"/>
                <LetterInput value="A" letterStatus=""/>
                <LetterInput value="R" letterStatus=""/>
                <LetterInput value="R" letterStatus=""/>
                <LetterInput value="O" letterStatus=""/>
            </div>
            <p>A letra C está na posição correta na palavra</p>
            <div className="word-try">
                <LetterInput value="T" letterStatus=""/>
                <LetterInput value="E" letterStatus="isInAnotherPosition"/>
                <LetterInput value="X" letterStatus=""/>
                <LetterInput value="T" letterStatus=""/>
                <LetterInput value="O" letterStatus=""/>
            </div>
            <p>A letra E está contida na palavra, mas está na posição errada.</p>
            <div className="word-try">
                <LetterInput value="T" letterStatus=""/>
                <LetterInput value="I" letterStatus=""/>
                <LetterInput value="N" letterStatus=""/>
                <LetterInput value="T" letterStatus="isWrong"/>
                <LetterInput value="A" letterStatus=""/>
            </div>
            <p>A letra T está na posição incorreta na palavra.</p>
            
        </div>
    )
}



// Guess the WORDLE in six tries.

// Each guess must be a valid five-letter word. Hit the enter button to submit.

// After each guess, the color of the tiles will change to show how close your guess was to the word.

// Examples

    
// The letter W is in the word and in the correct spot.

    
// The letter I is in the word but in the wrong spot.

    
// The letter U is not in the word in any spot.

// A new WORDLE will be available each day!
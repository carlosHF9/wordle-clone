export default function ValidateWord(word, tryArray) {
    var wordsRepetition = {}
    var validatedArray = []
    var splitedWord = word.split('')

    splitedWord.map( letter => {
        if(!wordsRepetition[letter]) {
            wordsRepetition[letter] = 1
        } else {
            wordsRepetition[letter] += 1
        }
    })


    tryArray.map( (letter, index ) => {
        if(letter === splitedWord[index]) {
            wordsRepetition[letter] -= 1
            validatedArray.push({value: letter, letterStatus: 'isRight'})
            
        }

        else {
            validatedArray.push({value: letter})
        }
    })

    
    validatedArray.map( (letter, index) => {
        if(!letter.letterStatus) {
            if(wordsRepetition[letter.value]) {
                letter.letterStatus = 'isInAnotherPosition'
            }
            
            else {
                letter.letterStatus = 'isWrong'
            }
        }

        

       

        

        
        

        
    })
    
   
    

    return validatedArray

}

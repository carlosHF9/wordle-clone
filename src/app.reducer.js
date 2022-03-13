import ValidateWord from "./validateWord";


export default function AppReducer(state, action) {
  switch (action.type) {
    case "SET_INPUTVALUE":
      return {
        ...state,
        defaultMatrixTemplate: state.defaultMatrixTemplate.map((row, index) =>
          index !== action.rowIndex
            ? row
            : row.map((cell, CellIndex) =>
                CellIndex !== action.celIndex ? cell : action.newValue
              )
        )
      };

    case "CONFIRM_GUESS":
      return state.secretWord ===
        state.defaultMatrixTemplate[state.currentRow].join("")
        ? {
            ...state,
            isGameOver: {
              status: true,
              win: true
            }
          }
        : state.currentRow === state.defaultMatrixTemplate.length - 1
        ? { ...state, isGameOver: { status: true, win: false } }
        : {
            ...state,
            currentRow: state.currentRow + 1,
            currentEditingCell: 0,
            verifiedRows: [...state.verifiedRows, state.currentRow],
            currentValidatedArray: [...state.currentValidatedArray, ValidateWord(state.secretWord, state.defaultMatrixTemplate[state.currentRow])]
            
          };

    case "SET_CURRENTFIELD":
      return {
        ...state,
        currentEditingCell: action.newIndexCell
      };

    case "SET_CURRENTFIELDVALUE":
      return {
        ...state,

        defaultMatrixTemplate: state.defaultMatrixTemplate.map(
          (row, rowIndex) =>
            rowIndex !== state.currentRow
              ? row
              : row.map((cell, celIndex) =>
                  celIndex !== state.currentEditingCell ? cell : action.newValue
                )
        )
      };

    case "NEXT_FIELD":


      
     
      return {
        ...state,
        currentEditingCell:
          state.currentEditingCell === state.rowLength
            ? state.currentEditingCell
            : state.currentEditingCell + 1
      };

    case "PREVIOUS_FIELD":

      
      
      return {
        ...state,
        currentEditingCell: state.currentEditingCell === 0 ? 0 : state.currentEditingCell -1
        
      };

    case "DELETE_VALUE":

    
      return state.currentEditingCell === state.rowLength
        ? {
            ...state,
            currentEditingCell: state.rowLength -1
          }
        : state.defaultMatrixTemplate[state.currentRow][
            state.currentEditingCell
          ] === ""
        ? {
            ...state,
            currentEditingCell:
              state.currentEditingCell === 0 ? 0 : state.currentEditingCell - 1,
            defaultMatrixTemplate: state.defaultMatrixTemplate.map(
              (row, rowIndex) =>
                rowIndex !== state.currentRow
                  ? row
                  : row.map((cell, cellIndex) =>
                      cellIndex !== state.currentEditingCell - 1 ? cell : ""
                    )
            )
          }
        : {
            ...state,
            defaultMatrixTemplate: state.defaultMatrixTemplate.map(
              (row, rowIndex) =>
                rowIndex !== state.currentRow
                  ? row
                  : row.map((cell, cellIndex) =>
                      cellIndex !== state.currentEditingCell ? cell : ""
                    )
            )
          };

    case "START_SHAKING":
      return { ...state, rowIsShaking: true };

    case "STOP_SHAKING":
      return { ...state, rowIsShaking: false };
    default:
      return;
  }
}

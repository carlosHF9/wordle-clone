import { useContext } from "react";
import LetterInput from "../letterinput/letterinput.component";
import { GlobalContext } from "../../App";
import "./styles.css";

const lettersRowStyle = {
  baseStyle: {
    display: "flex",
    gap: "10px",
    margin: "0 auto"
  }
};

export default function LettersRow({ row, rowIndex, targetWord, validatedArray }) {
  const { state } = useContext(GlobalContext);

  return (
    <div
      style={lettersRowStyle.baseStyle}
      className={
        state.currentRow === rowIndex && state.rowIsShaking
          ? "animated-row"
          : ""
      }
    >
      {!state.verifiedRows.includes(rowIndex)
        ? row.map((cell, index) => (
            <LetterInput
              readOnly={state.currentRow !== rowIndex}
              rowIndex={rowIndex}
              cellIndex={index}
              value={cell}
              key={index}
            />
          ))
        : validatedArray[rowIndex].map((cell, index) => (
            <LetterInput
              key={index}
              value={cell.value}
              readOnly={state.currentRow !== rowIndex}
              letterStatus={cell.letterStatus}
            />
          ))}
    </div>
  );
}

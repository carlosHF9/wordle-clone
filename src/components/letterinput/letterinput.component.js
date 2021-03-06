import { useState, useContext } from "react";
import { GlobalContext } from "../../App";
import "./letterinput.css";

export const letterStyleState = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "37px",
    width: "37px",
    border: "2px solid black",
    fontSize: "1.7rem",
    textTransform: "uppercase",
    borderRadius: '20px'
  },
  isWrong: {
    backgroundColor: "red",
    color: "white"
  },

  isRight: {
    backgroundColor: "green",
    color: "white"
  },
  isInAnotherPosition: {
    backgroundColor: "orange",
    color: "white"
  },

  default: {
    backgroundColor: "white",
    fontFamily: "inherit"
  }
};

export default function LetterInput({
  value,
  letterStatus,
  index,
  readOnly,
  cellIndex,
  rowIndex,
  forInstructions
}) {
  const { dispatch, state } = useContext(GlobalContext);

  return (forInstructions ? 
    <div
      onClick={() => {
        dispatch({
          type: "SET_CURRENTFIELD",
          newIndexCell: cellIndex
        });
      }}
      style={{
        ...letterStyleState[letterStatus],
        ...letterStyleState.baseStyle
      }}
      className={
        state.currentEditingCell === cellIndex && rowIndex === state.currentRow
          ? "is-editing"
          : readOnly
          ? "disabled"
          : ""
      }
    >
      <p>{value}</p>
    </div> : <div
      style={{
        ...letterStyleState[letterStatus],
        ...letterStyleState.baseStyle
      }}
    >
      <p>{value}</p>
    </div>
  );

  // return (
  //   <input
  //     maxLength={1}
  //     value={value}
  //     style={{
  //       ...letterStyleState[letterStatus],
  //       ...letterStyleState.baseStyle
  //     }}
  //     className="container"
  //     onChange={(e) => {
  //       dispatch({
  //         type: "SET_INPUTVALUE",
  //         celIndex: cellIndex,
  //         rowIndex: rowIndex,
  //         newValue: e.target.value
  //       });
  //     }}
  //     readOnly={readOnly}
  //   />
  // );
}

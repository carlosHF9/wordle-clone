import { useState, useContext } from "react";
import { GlobalContext } from "../../App";
import "./letterinput.css";

const letterStyleState = {
  baseStyle: {
    height: "50px",
    width: "50px",
    border: "3px solid black",
    fontSize: "1.5rem",
    textAlign: "center",
    textTransform: "uppercase"
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
  rowIndex
}) {
  const { dispatch, state } = useContext(GlobalContext);

  return (
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

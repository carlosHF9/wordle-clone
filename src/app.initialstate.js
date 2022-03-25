import { Delete } from "react-feather";



export default {
  secretWord: "andar",

  shouldGiveTip: false,
  currentRow: 0,
  verifiedRows: [],
  currentValidatedArray: [],
  currentKey: '',
  rowLength: 5,
  currentEditingCell: 0,
  rowIsShaking: false,
  isGameOver: {
    status: false,
    win: false
  },
  isResultModalOpend:false,
  isInstructionModalOpend: false,
  isStatisticsOpend: true,
  letterKeyboardStatus: {},
  defaultMatrixTemplate: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ],
};

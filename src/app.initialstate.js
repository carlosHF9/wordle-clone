export default {
  secretWord: "andar",
  shouldGiveTip: false,
  currentRow: 0,
  verifiedRows: [],
  currentValidatedArray: [],
  rowLength: 5,
  currentEditingCell: 0,
  rowIsShaking: false,
  isGameOver: {
    status: false,
    win: false
  },
  defaultMatrixTemplate: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ]
};

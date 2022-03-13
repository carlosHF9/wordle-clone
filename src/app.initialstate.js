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
  ],
  keyboard: [
    [
      {value: 'q', status: 'neutral'},
      {value: 'w', status: 'neutral'},
      {value: 'e', status: 'neutral'},
      {value: 'r', status: 'neutral'},
      {value: 't', status: 'neutral'},
      {value: 'y', status: 'neutral'},
      {value: 'u', status: 'neutral'},
      {value: 'i', status: 'neutral'},
      {value: 'o', status: 'neutral'},
      {value: 'p', status: 'neutral'}
    ],
    [
      {value: 'a', status: 'neutral'},
      {value: 's', status: 'neutral'},
      {value: 'd', status: 'neutral'},
      {value: 'f', status: 'neutral'},
      {value: 'g', status: 'neutral'},
      {value: 'h', status: 'neutral'},
      {value: 'j', status: 'neutral'},
      {value: 'k', status: 'neutral'},
      {value: 'l', status: 'neutral'}
    ],
    [
      {value: 'z', status: 'neutral'},
      {value: 'x', status: 'neutral'},
      {value: 'c', status: 'neutral'},
      {value: 'v', status: 'neutral'},
      {value: 'b', status: 'neutral'},
      {value: 'n', status: 'neutral'},
      {value: 'm', status: 'neutral'}
    ]
  ]
};

export default function RowReducer(state, action) {
  switch (action.type) {
    case "SET_READONLY":
      return { ...state, isReadOnly: action.payload };

    case "HAS_CONFIRMED":
      return { ...state, setHasConfirmed: action.payload };
  }
}

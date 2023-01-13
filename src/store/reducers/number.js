export function numberReducer(state, action) {
    switch (action.type) {
      case "numberAdd2":
        return { ...state, number: state.number + 2 };
      case "multiplybBy7" :
          return { ...state, number: state.number * 7 };
      case "dividedBy25" :
          return { ...state, number: state.number / 25 };
      case "parseInt" :
          return { ...state, number: Math.round(state.number) };
      case "addN" :
          return { ...state, number: state.number + action.nNumber };
      default:
        return state;
    }
  }
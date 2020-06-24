import * as types from "../actions";

//초기값 설정
const initialState = {
  id: 0,
  isChecked: false,
  insertedAt: "2020-02-02"
};

//리듀서
const app = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_ACTION_TEST:
      return {
        ...state,
        isChecked: action.data
      };
    default:
      return state;
  }
};

export default app;

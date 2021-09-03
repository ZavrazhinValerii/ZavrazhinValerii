import { ADD_CHAT_CATION_ACTION } from "./constants";

const initialState = {
  chatsList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_CATION_ACTION: {
      return {
        ...state,
        chatsList: [
          ...state.chatsList,
          {
            ...action.payload,
          },
        ],
      };
    }
    default:
      return state;
  }
};
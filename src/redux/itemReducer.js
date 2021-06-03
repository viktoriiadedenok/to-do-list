import { CREATE_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "./types";

const initialState = {
  items: [],
};

export const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_ITEM:
      const newItems = [...state.items, action.payload]
      console.log("hi")
      return { ...state, items: newItems };

    case REMOVE_ITEM:
      console.log(state.items)
      const removeId = action.payload.id;
      const newList = state.items.filter(function (val, index) {
        return val.id !== removeId
      })
      return { ...state, items: newList };

    case UPDATE_ITEM:
      const updatedTitle = action.payload.title;
      const updatedId = action.payload.id

      const updatedList = state.items.filter(function (val) {
        if (val.id === updatedId) {
          val.title = updatedTitle
        }
        return val
      });

      return { ...state, items: updatedList };

    default:
      return state;
  }
};

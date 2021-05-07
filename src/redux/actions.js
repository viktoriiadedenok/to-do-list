import { CREATE_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "./types";

export const createItem = (item) => {
  return {
    type: CREATE_ITEM,
    payload: item
  }
};

export const deleteItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    payload: itemId
  }
};

export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item
  }
};



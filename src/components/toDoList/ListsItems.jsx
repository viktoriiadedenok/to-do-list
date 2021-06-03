import React, { useState } from "react";
import ItemForm from "./ListItem";
import Popup from "./UpdateItem.js";
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'


const ListsItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [getItem, setGetItem] = useState({});

  useFirestoreConnect([
    'tutorials'
  ])

  const todos = useSelector(state => {
    return state.firestore.ordered['tutorials']
  });

  const firestore = useFirestore();
  const deleteItem = (id) => {
    firestore.delete(`tutorials/${id}`)
  }

  const togglePopup = (item) => {
    setIsOpen(!isOpen);
    setGetItem(item)
  }

  if (!isLoaded(todos)) {
    return 'Loading'
  }


  return (
    <div>
      <ul className="">
        {todos.map(item =>
          <li className="list-item line" key={item.id}>
            <div className="checkbox">
              <input
                className="form-check"
                type="checkbox" value="" id="defaultCheck1" />
              <label
                className="form-check-label"
                for="defaultCheck1">
              </label>
            </div>
            <div  > <ItemForm item={item} key={item.id} /></div>
            <div className="button-edit"> <button className="small-item-btn mr-2" onClick={() => togglePopup(item)}><li className="fas fa-edit"></li></button></div>
            <div className="button-delate"> <button className="small-item-btn" onClick={() => deleteItem(item.id)}><li className="fas fa-trash-alt"></li></button></div>
          </li>
        )}
        <div>
          {isOpen && <Popup
            item={getItem}
            handleClose={togglePopup} />}
        </div>
      </ul>
    </div >
  )
};

export default ListsItems;

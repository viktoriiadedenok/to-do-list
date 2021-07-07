import React, { useState } from "react";
import ListItem from "./ListItem";
import Popup from "./UpdateItem.js";
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'


const ListsItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [getItem, setGetItem] = useState({});
  const { uid } = useSelector((state) => state.firebase.auth);
  const firestore = useFirestore();

  useFirestoreConnect({
    collection: `users2-${uid}`,
  })

  const todos = useSelector(state => {

    return state.firestore.ordered[`users2-${uid}`]
  });

  const deleteItem = (id) => {
    firestore.delete(`users2-${uid}/${id}`)
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
        {todos &&
          Object.values(todos).map(item =>
            <li className="list-item line" key={item.id}>
              <ListItem
                title={item.title}
                isDone={item.isDone}
                id={item.id} />
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

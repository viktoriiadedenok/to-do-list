import React, { useState } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { ToDolDataService } from '../../data.service'
import Popup from "./UpdateItem";

const tds = new ToDolDataService();

const ListsItems = ({ syncPost }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [getItem, setGetItem] = useState({});

  const togglePopup = (item) => {
    setIsOpen(!isOpen);
    toggleGetItem(item);
  }

  const toggleGetItem = (val) => {
    setGetItem(val)
  }

  const deleteItem = (id) => {
    tds.delete(id)
      .then(() => {
        console.log("Deleted item successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  if (!syncPost.length) {
    return <p className="text-center mt-2">No items are here yet.</p>
  }

  return (
    <div>
      <ul className="">
        {syncPost.map(item =>
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
            <div  > <ListItem item={item} key={item.id} /></div>
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

const mapStateToProps = state => {
  return {
    syncPost: state.item.items
  }
}


export default connect(mapStateToProps, null)(ListsItems);

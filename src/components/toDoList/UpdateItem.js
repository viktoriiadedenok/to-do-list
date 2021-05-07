import React from "react";
import { ToDolDataService } from '../../data.service'

const tds = new ToDolDataService();

const Popup = props => {
    let changedItemTitle = props.item.title;
    const id = props.item.id;

    const submitHandler = event => {
        event.preventDefault()
        if (!changedItemTitle.trim()) {
            return
        }
        updateItem(id, { title: changedItemTitle });
        props.handleClose();
    }

    const updateItem = (id, value) => {
        tds.update(id, value)
            .then(() => {
                console.log("Updated item successfully!");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const changeInput = (event) => {
        changedItemTitle = event.target.value;
    }

    return (
        <div className="popup-box">
            <div className="box">
                <form
                    className="d-flex justify-content-between m-b-15"
                    onSubmit={submitHandler}
                >
                    <div className="input-form">
                        <div className="wrap-input100 validate-input "
                        >
                            <input
                                defaultValue={changedItemTitle}
                                className="input100"
                                type="text"
                                id="title"
                                name="title"
                                onChange={changeInput}
                            />
                        </div>
                        <div className="">
                            <button type="submit"
                                className="login100-form-btn"
                            ><li className="fa fa-check" aria-hidden="true"></li></button>
                        </div>
                    </div>
                </form>
                <span className="close-icon" onClick={props.handleClose}>x</span>
            </div>
        </div>
    );

};

export default Popup;
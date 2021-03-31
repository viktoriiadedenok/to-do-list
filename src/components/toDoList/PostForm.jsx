import React from "react";
import { connect } from "react-redux";
import createPost from "../../redux/actions";


const PostForm = (props) => {
  let state = { title: '' };

  const submitHandler = event => {
    event.preventDefault()
    const { title } = state;

    if (!title.trim()) {
      return
    }
    const newPost = {
      title, id: Date.now().toString()
    }
    props.createPost(newPost); //dispatch
    event.target.reset();
  }

  const changeInput = event => {
    state = ({ title: event.target.value });
  }

  return (
    <div >
      <form
        className="d-flex justify-content-between m-b-15"
        onSubmit={submitHandler}>
        <div className="input-form">
          <div className="wrap-input100 validate-input "
          >
            <input
              placeholder="Write down something"
              className="input100"
              type="text"
              id="title"
              title={state.title}
              name="title"
              onChange={changeInput}
            />
          </div>
          <div className="">
            <button type="submit"
              className="login100-form-btn"
            ><li className="fas fa-plus-square"></li></button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm);

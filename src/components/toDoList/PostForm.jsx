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
      <div className="d-flex justify-content-center">
        <form className="" onSubmit={submitHandler}>
          <div className="wrap-input100 validate-input m-b-16"
          >
            <label htmlFor="title"></label>
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
          <div className="text-center"><button type="submit"
            className="login100-form-btn mb-2"
          >Add to list</button>  </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm);

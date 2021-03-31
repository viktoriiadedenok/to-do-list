import React from "react";
import Post from "./Post";
import { connect } from "react-redux";


const Posts = ({ syncPost }) => {
  if (!syncPost.length) {
    return <p className="text-center mt-2">No posts are here yet.</p>
  }
  return (
    <ul className="">
      {syncPost.map(post =>
        <li className="list-item">
          <div className="checkbox">
            <input
              // className="form-check"
              type="checkbox" value="" id="defaultCheck1" />
            <label
              // className="form-check-label" 
              for="defaultCheck1">
            </label>
          </div>

          <div  > <Post post={post} key={post.id} /></div>

          <div className="button-edit"> <button className="small-item-btn"><li className="fas fa-edit"></li></button></div>

          <div className="button-delate"> <button className="small-item-btn"><li className="fas fa-trash-alt"></li></button></div>
        </li>
      )}
    </ul>
  )
};

const mapStateToProps = state => {
  return {
    syncPost: state.post.posts
  }
}

export default connect(mapStateToProps, null)(Posts);

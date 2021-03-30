import React from "react";
import Post from "./Post";
import { connect } from "react-redux";


const Posts = ({ syncPost }) => {
  if (!syncPost.length) {
    return <p className="text-center mt-2">No posts are here yet.</p>
  }
  return (
    // <table className="table table-striped">
    <ul className="list-group mt-10">
      {syncPost.map(post =>
        <li className="d-flex justify-content-between list-group-item inline"><Post post={post} key={post.id} />
          <button className="delate-item-btn">Delate</button></li>)}
    </ul>
    // </table>
  )
};

const mapStateToProps = state => {
  return {
    syncPost: state.post.posts
  }
}

export default connect(mapStateToProps, null)(Posts);

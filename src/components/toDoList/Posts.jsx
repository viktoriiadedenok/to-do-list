import React from "react";
import Post from "./Post";
import { connect } from "react-redux";


const Posts = ({ syncPost }) => {
  if (!syncPost.length) {
    return <p className="text-center mt-2">No posts are here yet.</p>
  }
  return (
    <table className="table table-bordered">
      <tbody>
        {syncPost.map(post => <tr>
          {/* <th scope="row">1</th> */}
          <td><Post post={post} key={post.id} /></td>
          {/* <td></td> */}
        </tr>)}
      </tbody>
    </table>)
};

const mapStateToProps = state => {
  return {
    syncPost: state.post.posts
  }
}

export default connect(mapStateToProps, null)(Posts);

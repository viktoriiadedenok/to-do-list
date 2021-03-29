import { CREATE_POST } from "./types";

const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};
export default createPost;

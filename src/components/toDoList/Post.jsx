import React from "react";


const Post = ({ post }) => {
    return (
        <strong>
            <p className="p-2 text-muted">{post.title}</p>
        </strong>
    )
}
export default Post;

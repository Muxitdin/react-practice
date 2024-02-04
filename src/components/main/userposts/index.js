import React from "react";
import "./style.css"

const Post = () => {
    return (
        <div className="posts">
            <h2>My Posts</h2>
            <textarea placeholder="your news..." cols={90} rows={5} style={{ fontSize: "20px" }}></textarea>
            <button className="send-btn">Send</button>
        </div>
    );
}

export default Post;
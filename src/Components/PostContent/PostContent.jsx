import "./PostContent.css";
import { BsLink45Deg } from "../Icon";
import { useState } from "react";
import { createPost } from "../../actions/postsAction";
import { usePosts } from "../../context/posts-context";

const PostContent = () => {
  const [postData, setPostData] = useState({
    content: ""
  });

  const { postDispatch } = usePosts();

  const submitHandler = async () => {
    try {
      const data = await createPost(postData);
      await postDispatch({ type: "CREATE_POST", payload: data.posts }); 
    } catch (error) {
      console.error(error)
    }
    setPostData({content: ''})
  };

  return (
    <div className="flex-row input-field">
      <input
        value={postData.content}
        onChange={(e) => setPostData({ content: e.target.value })}
        type="text"
        placeholder="What's in your mind?"
        className="post-field curve-border"
      />
      <button onClick={submitHandler} className="btn btn-primary curve-border">
        <BsLink45Deg />
        Post
      </button>
    </div>
  );
};

export default PostContent;

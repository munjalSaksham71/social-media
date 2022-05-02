import "./ViewContent.css";
import { AiOutlineLike, BsBookmarks } from '../Icon'

const ViewContent = ({ posts }) => {
  return (
    <div className="flex-column align-post">
      {posts.map((post) => {
        return (
          <div key={post._id} className="post-content">
            <div className="flex-row mb-2">
              <img
                src="./images/img_avatar.png"
                alt="image-avatar"
                className="avatar_img"
              />
              <div className="flex-column ml-1">
                <div className="post-author">{post.username}</div>
                <div className="post-date">
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="post-author">{post.content}</div>
            <div className="flex-row icons mt-1">
              <div><AiOutlineLike className="icon" /></div>
              <div><BsBookmarks className="icon ml-2" /></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewContent;

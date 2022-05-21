import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../actions/postsAction";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SideBar from "../../Components/SideBar/SideBar";
import { AiOutlineLike, AiFillLike, FaTrash } from "../../Components/Icon";
import "./SinglePostScreen.css";
import {
  addCommentToPost,
  deleteCommentFromPost,
  downvoteComment,
  getComments,
  upvoteComment,
} from "../../actions/commentActions";
import { useComments } from "../../context/postComments-context";
import jwt_decode from "jwt-decode";
import { usePosts } from "../../context/posts-context";
import { dislikePost, likePost } from "../../actions/likesAction";

const SinglePostScreen = () => {
  const { postId } = useParams();
  const [commentText, setCommentText] = useState("");
  const [post, setPost] = useState();
  const user = jwt_decode(localStorage.getItem("user_token"));

  const {
    commentsState: { comments },
    commentsDispatch,
  } = useComments();

  const { postDispatch } = usePosts();

  useEffect(() => {
    (async () => {
      const { data } = await getPostById(postId);
      setPost(data?.post);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getComments(postId);
      commentsDispatch({ type: "GET_COMMENTS", payload: data.comments });
    })();
  }, []);

  const addCommentHandler = async () => {
    try {
      const { data } = await addCommentToPost(commentText, postId);
      commentsDispatch({ type: "ADD_TO_COMMENTS", payload: data.comments });
    } catch (error) {
      console.error(error);
    }
    setCommentText("");
  };

  const upvoteHandler = async (commentId) => {
    try {
      const { data } = await upvoteComment(postId, commentId);
      commentsDispatch({ type: "ADD_TO_LIKED", payload: data.comments });
    } catch (error) {
      console.error(error);
    }
  };

  const downvoteHandler = async (commentId) => {
    try {
      const { data } = await downvoteComment(postId, commentId);
      commentsDispatch({ type: "REMOVE_FROM_LIKED", payload: data.comments });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCommentHandler = async (commentId) => {
    try {
      const { data } = await deleteCommentFromPost(postId, commentId);
      commentsDispatch({
        type: "REMOVE_FROM_COMMENTS",
        payload: data.comments,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-row content-align">
      <div className="flex-column">
        <ProfileCard />
        <SideBar />
      </div>
      <div className="flex-column post-container">
        <div className="post-content p-2">
          <div className="flex-row mb-2">
            <div className="flex-column ml-1">
              <div className="post-author">{post?.username}</div>
              <div className="post-date">
                {new Date(post?.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="post-author pl-2">{post?.content}</div>
        </div>
        {/* Comment Section */}
        <div>
          {!comments.length  && <div> No Comments </div>}
          {comments?.map((comment) => {
            return (
              <div key={comment._id} className="comments-chip flex-column">
                <div className="comment-username">
                  <span className="bold">{comment?.username}</span> says:{" "}
                </div>
                <div className="comment-text mt-1">{comment?.text}</div>
                <div className="flex-row mt-1">
                  <div>
                    {comment.votes.upvotedBy.some(
                      (item) => item.username === user.username
                    ) ? (
                      <AiFillLike
                        onClick={() => downvoteHandler(comment._id)}
                        className="icon"
                      />
                    ) : (
                      <AiOutlineLike
                        onClick={() => upvoteHandler(comment._id)}
                        className="icon"
                      />
                    )}
                  </div>
                  {comment.username === user.username && (
                    <FaTrash
                      onClick={() => deleteCommentHandler(comment._id)}
                      className="icon ml-auto mr-3"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Add Comment Section */}
        <div className="add-comment curve-border flex-row mb-4">
          <input
            value={commentText}
            className="post-field "
            type="text"
            placeholder="Add a Comment"
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            onClick={() => addCommentHandler()}
            className="btn btn-primary comment-btn  curve-border"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export { SinglePostScreen };

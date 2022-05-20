import axios from "axios";

export const getComments = async (postId) => {
  try {
    const response = await axios.get(`/api/comments/${postId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addCommentToPost = async (commentText, postId) => {
  const token = localStorage.getItem("user_token");
  try {
    const response = await axios.post(
      `/api/comments/add/${postId}`,
      {
        commentData: {
          text: commentText
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCommentFromPost = async (postId, commentId) => {
  const token = localStorage.getItem("user_token");
  try {
    const response = await axios.post(
      `/api/comments/delete/${postId}/${commentId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const upvoteComment = async (postId, commentId) => {
  const token = localStorage.getItem("user_token").slice(1,-1);
  try {
    const response = await axios.post(
      `/api/comments/upvote/${postId}/${commentId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response
  } catch (error) {
    console.error(error.response);
  }
};

export const downvoteComment = async (postId, commentId) => {
  const token = localStorage.getItem("user_token");
  try {
    const response = await axios.post(
      `/api/comments/downvote/${postId}/${commentId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response
  } catch (error) {
    console.error(error);
  }
};

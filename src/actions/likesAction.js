import axios from "axios";

export const likePost = async (id) => {
  const token = localStorage.getItem("user_token");
  try {
    const { data } = await axios.post(
      `/api/posts/like/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data
  } catch (error) {
    console.error(error);
  }
};

export const dislikePost = async (id) => {
  const token = localStorage.getItem("user_token");
  try {
    const { data } = await axios.post(
      `/api/posts/dislike/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data
  } catch (error) {
    console.error(error);
  }
};
  

import axios from "axios";

export const getPosts = async () => {
  try {
    const { data } = await axios.get("/api/posts", {
      headers: {
        authorization: localStorage.getItem("user_token"),
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (postData) => {
  try {
    const { data } = await axios.post(
      "/api/posts",
      { postData },
      {
        headers: {
          authorization: localStorage.getItem("user_token"),
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPostsFromUser = async (username) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`,);
    return response;
  } catch (error) {
    console.error(error.response);
  }
};


export const deletePost = async (id) => {
  const token = localStorage.getItem("user_token");
  try {
    const response = await axios.delete(`/api/posts/${id}`, {
      headers: {
        authorization: token
      }
    });
    return response;
  } catch (error) {
    console.error(error.response);
  }
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`/api/posts/${id}`)
    return response;
  } catch (error) {
    console.error(error);
  }
}
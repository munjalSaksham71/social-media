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

import axios from "axios";

const config = {
  headers: {
    authorization: localStorage.getItem("user_token"),
  },
};

export const getPosts = async () => {
  try {
    const { data } = await axios.get("/api/posts");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (postData) => {
  try {
    const { data } = await axios.post("/api/posts", { postData }, config);
    return data;
  } catch (error) {
      console.error(error);
  }
};

import axios from "axios";


export const followUser = async (id) => {
  const token = localStorage.getItem("user_token");
  try {
    const data = await axios.post(
      `/api/users/follow/${id}`,
      {},
      {
        headers: {
          authorization: token,
        }
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export const unfollowUser = async (id) => {
  const token = localStorage.getItem("user_token");
  try {
    const data = await axios.post(
      `/api/users/unfollow/${id}`,
      {},
      {
        headers: {
          authorization: token,
        }
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

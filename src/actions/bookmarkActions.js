import axios from "axios";

export const getBookmarks = async () => {
  const token = localStorage.getItem("user_token");
  try {
    const { data } = await axios.get("/api/users/bookmark", {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addToBookmark = async (id) => {
  const token = localStorage.getItem("user_token");
  try {
    const { data } = await axios.post(
      `/api/users/bookmark/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const removeFromBookmark = async (id) => {
    const token = localStorage.getItem("user_token");
    try {
      const { data } = await axios.post(
        `/api/users/remove-bookmark/${id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };
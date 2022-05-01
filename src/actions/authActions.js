import axios from "axios";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export const login = async (username, password) => {
  try {
    const data = await axios.post(
      "/api/auth/login",
      { username, password },
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const signup = async (username, password, firstName, lastName) => {
  try {
    const data = await axios.post(
      "/api/auth/signup",
      {
        username,
        password,
        firstName,
        lastName,
      },
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

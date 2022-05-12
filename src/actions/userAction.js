import axios from "axios"

export const getUserById = async (id) => {
    try {
        const { data } = await axios.get(`/api/users/${id}`)
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const updateUser =  async (firstName, lastName, username, bio, imageUrl) => {
    const token = localStorage.getItem("user_token");

    try {
        const { data } = await axios.post(`/api/users/edit`, {
            userData : {
                firstName, 
                lastName, 
                username, 
                bio, 
                imageUrl
            }
        }, {
            headers: {
                authorization: token
            }
        })
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}
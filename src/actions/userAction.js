import axios from "axios"

export const getUserById = async (id) => {
    try {
        const { data } = await axios.get(`/api/users/${id}`)
        return data;
    } catch (error) {
        console.error(error)
    }
}
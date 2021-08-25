import axios from "axios";
// write functions with axios that fetch the information from the backend
// inside the function you have for example: await axios.get(`/api/celebrities`)

export async function getSomething() {
    try {
        const { data } = await axios.get("/api");
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getCelebrities() {
    try {
        const { data: {celebrities} } = await axios.get("/api/celebrities");

        console.log(celebrities);

        return celebrities;
    } catch (error) {
        throw error;
    }
}

export async function getOneCelebrity(id) {
    try {
        const { data: celebrity } = await axios.get(`/api/celebrities/${id}`);

        return celebrity;
    } catch (error) {
        throw error;
    }
}

export async function deleteCelebrity(id) {
    try {
        const { data } = await axios.delete(`/api/celebrities/delete/${id}`)

        return data
    } catch (error) {
        throw error;
    }
}

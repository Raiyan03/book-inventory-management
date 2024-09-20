import axios from "axios"

export const addNewBookCall = async (book) => {
    console.log(book);
    try {
        const res = await axios.post('/api/add-book/', book);
        return res;
    } catch (error) {
        return error;
    }
}

export const editBookCall = async (book) => {
    try{
        const res = await axios.post('/api/edit-book/', book);
        return res;
    } catch (error) {
        return error;
    }
}

export const deleteBookCall = async (entry_id) => {
    try {
        const res = await axios.post('/api/delete-book/', { entry_id });
        return res;
    } catch (error) {
        console.log("Error deleting book:", error);
        return error;
    }
}
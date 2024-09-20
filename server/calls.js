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
        return error;
    }
}

export const getBooksCall = async () => {
    const value = "value"; // This is a dummy value
    try {
        const res = await axios.post('/api/get-books/', {value});
        return res;
    } catch (error) {
        return error;
    }
}

export const getFilteredBooksCall = async (search) => {
    try {
        console.log(search);
        const res = await axios.post('/api/get-filtered-books/', search);
        return res;
    } catch (error) {
        return error;
    }
}

export const getAuthorsCall = async () => { 
    try {
        const res = await axios.post('/api/get-authors/');
        return res;
    } catch (error) {
        return error;
    }
}

export const getBooksGenreCall = async () => {
    try {
        const res = await axios.post('/api/get-books-genre/');
        return res;
    } catch (error) {
        return error;
    }
}
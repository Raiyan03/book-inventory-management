const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

const validateDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
        return false;
    }
    const parsedDate = new Date(date);
    return parsedDate instanceof Date && !isNaN(parsedDate);
}

const validateISBN = (isbn) => {
    const isbn10Regex = /^(?:\d{9}X|\d{10})$/;
    const isbn13Regex = /^(?:\d{13})$/;
    return isbn10Regex.test(isbn) || isbn13Regex.test(isbn);
}

const validateStock = (stock) => {
    return Number.isInteger(stock) && stock >= 0;
}

export const validateBook = (book) => {
    const { title, author, genre, publication_date, isbn, stock } = book;
    if (!validateName(title)) {
        return { error: "Invalid title" };
    }
    if (!validateName(author)) {
        return { error: "Invalid author" };
    }
    if (!validateName(genre)) {
        return { error: "Invalid genre" };
    }
    if (!validateDate(publication_date)) {
        return { error: "Invalid publication date" };
    }
    if (!validateISBN(isbn)) {
        return { error: "Invalid ISBN" };
    }
    if (!validateStock(stock)) {
        return { error: "Invalid stock" };
    }
    return { success: "Validated" };
}
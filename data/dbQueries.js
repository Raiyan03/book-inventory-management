import { sql } from "@vercel/postgres";

export const InsertNewBool = async ( title, author, genre, publication_date, isbn, stock ) => {
    try {
        const res = sql`INSERT INTO INVENTORY (title, author, genre, publication_date, isbn, stock)
                    VALUES (${title}, ${author}, ${genre}, ${publication_date}, ${isbn}, ${stock})`;
        return res;
    } catch (error) {
        console.error("Error adding new book:", error);
    }
}

export const UpdateBookDetails = async (entry_id, title, author, genre, publication_date, isbn, stock) => {
    try {
        const res = sql`UPDATE INVENTORY 
                        SET title = ${title}, author = ${author}, genre = ${genre}, 
                            publication_date = ${publication_date}, isbn = ${isbn}, stock = ${stock}
                        WHERE entry_id = ${entry_id}`;
        return res;
    } catch (error) {
        console.error("Error updating book details:", error);
    }
}

export const DeleteBook = async (entry_id) => {
    try {
        const res = sql`DELETE FROM INVENTORY WHERE entry_id = ${entry_id}`;
        return res;
    } catch (error) {
        console.error("Error deleting book:", error);
    }
}

export const SearchBooks = async (genres, authors, searchElement) => {
    try {
        // Only trigger search if input length is more than 3 characters
        console.log("Search Element:", searchElement);
        if (searchElement.length > 3) {
            const searchQuery = searchElement + '%'; // Match only starting characters
            const query = sql`
                SELECT * FROM INVENTORY
                WHERE title ILIKE ${searchQuery}
                OR author ILIKE ${searchQuery}
                OR genre ILIKE ${searchQuery}
            `;
            const res = await query;
            return res;
        } else {
            return []; // Return empty array if input length is less than or equal to 3
        }
    } catch (error) {
        console.error("Error searching books:", error);
    }
}

export const GetAuthors = async () => {
    try {
        const res = sql`SELECT DISTINCT author FROM INVENTORY`;
        return res;
    } catch (error) {
        console.error("Error fetching authors:", error);
    }
}

export const GetGenres = async () => {
    try {
        const res = sql`SELECT DISTINCT genre FROM INVENTORY`;
        return res;
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
}
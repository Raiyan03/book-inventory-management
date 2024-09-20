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
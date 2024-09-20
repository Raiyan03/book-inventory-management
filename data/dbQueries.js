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
import { InsertNewBool } from "@/data/DbQueries";
import { NextResponse } from "next/server";

export const addNewBook = async (req) => {
    try {
        const { title, author, genre, publish_date, isbn, stock } = await req.json();
        
        const res = await InsertNewBool(title, author, genre, publish_date, isbn, stock);
        return NextResponse.json({ success: 'New book added successfully' });
    } catch (error) {
        console.error("Error adding new book:", error);
        return NextResponse.json({ error: 'Something wen wrong', details: error.message }, { status: 500 });
    }
}
import { NextResponse } from "next/server";

export const addNewBook = (req) => {
    const {title, author, genre, publish_date, isbn } = req.json();
    return NextResponse.json({title, author, genre, publish_date, isbn});
}
import { NextResponse } from "next/server";

export const addNewBook = async (req) => {
    const {title, author, genre, publish_date, isbn } = await req.json();

    return NextResponse.json({title, author, genre, publish_date, isbn});
}
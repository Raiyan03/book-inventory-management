import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export async function POST(req){
    const body = await req.json();
    const {rows} = await sql`SELECT * FROM INVENTORY`;
    return NextResponse.json(rows);
}
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export async function GET(req){
    console.log("At api route")
    const { searchParams } = new URL(req);
    const name = searchParams.get("name");
    const {rows} = await sql`SELECT * FROM INVENTORY`;
    return NextResponse.json(rows);
}
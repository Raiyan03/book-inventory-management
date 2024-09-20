import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export default async function POST(req){
    const body = await req.json();
    console.log("At api route");
    // const { searchParams } = new URL(req);
    // const name = searchParams.get("name");
    const {rows} = await sql`SELECT * FROM INVENTORY`;
    return NextResponse.json(rows);
}
import { sql } from "@vercel/postgres";
import axios from "axios";

async function MainPage(){
  const {rows} = await sql`SELECT * FROM INVENTORY`;
  const {data} = await axios.get("http://localhost:3000/api/get-books/")
  return (
    <div>
      {rows.map((row) => (
        <div key={row.isbn}>
          {row.isbn} - {row.title}
        </div>
      ))}
    </div>
  )
}

export default MainPage
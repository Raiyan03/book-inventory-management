import { sql } from "@vercel/postgres";

async function MainPage(){
  const {rows} = await sql`SELECT * FROM INVENTORY`;

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
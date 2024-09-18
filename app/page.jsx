"use client"
import { sql } from "@vercel/postgres";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import axios from "axios";
function MainPage() {
  // Fetch data from the database
  // const { rows } = await sql`SELECT * FROM INVENTORY`;

  const [data, setData] = useState(null);

  // Client-side request using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const values = { name: "ryan" };
        const response = await axios.post("/api/get-books", values);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" ">
      <Navbar />
      {/* {rows.map((row) => (
        <div key={row.isbn}>
          {row.isbn} - {row.title}
        </div>
      ))}

      Render data from the API call */}
      hello
      {data && <div>Data from API: {JSON.stringify(data)}</div>}
    </div>
  );
}

export default MainPage;

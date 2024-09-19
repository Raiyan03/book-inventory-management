"use client"
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import axios from "axios";
import BookTable from "@/components/bookTable";
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
    data &&
    <div className=" ">
      <Navbar />
      <BookTable books={data} setBooks={setData} />
    </div>
  );
}

export default MainPage;

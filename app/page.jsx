"use client"
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import axios from "axios";
import BookTable from "@/components/bookTable";
import Loader from "@/components/loader";
function MainPage() {
  // Fetch data from the database
  // const { rows } = await sql`SELECT * FROM INVENTORY`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Client-side request using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const values = { name: "ryan" };
        const response = await axios.post("/api/get-books", values);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" ">
      <Navbar setBooks={setData} />
      {
        loading ? (
          <div className="flex items-center justify-center h-96">
            <Loader />
          </div>
        ) : (
          data ? 
          <BookTable books={data} setBooks={setData} /> 
          : 
          <div className="flex flex-col items-center justify-center">
            <Image src={'/no-books.png'} height={400} width={400} alt="No books found image" />
            <h1 className=" text-5xl text-accent " >No books found</h1>
          </div>
        )
      }
    </div>
  );
}

export default MainPage;
"use client"
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import axios from "axios";
import BookTable from "@/components/bookTable";
import Loader from "@/components/loader";
import { deleteBookCall, getBooksCall, getFilteredBooksCall } from "@/server/calls";
import { getFilteredBooks } from "@/server/helper";
function MainPage() {
  // Fetch data from the database
  // const { rows } = await sql`SELECT * FROM INVENTORY`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearchInput] = useState("");
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [authorFilter, setAuthorFilter] = useState([]);
  const [authorName, setAuthorName] = useState("");
  // Client-side request using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBooksCall();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (search.length < 3) {
      fetchData();
    }
  }, [search]);

  useEffect(() => {
    console.log("Author filter:", search);
    const fetchFilteredData = async () => {
      try{
        setLoading(true);
        const searchParams = {
          searchElement: search,
          genre: [],
          authors: []
        }
        const response = await getFilteredBooksCall(searchParams);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    if (search.length >= 3) {
      fetchFilteredData();
    }
  }, [search]);

  useEffect(() => {
    const filterData = () => {
      if (!data) return;

      let filteredData = data;

      if (selectedGenre.length > 0) {
        filteredData = filteredData.filter(book => selectedGenre.includes(book.genre));
      }

      if (authorFilter.length > 0) {
        filteredData = filteredData.filter(book => authorFilter.includes(book.author));
      }

      setData(filteredData);
    };

    filterData();
  }, [selectedGenre, authorFilter]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBooksCall();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (selectedGenre.length === 0 && authorFilter.length === 0) {
      fetchData();
    }
  }, [selectedGenre, authorFilter]);

  return (
    <div className=" ">
      <Navbar 
      setBooks={setData} 
      setSearchInput={setSearchInput} 
      setAuthorFilter={setAuthorFilter}
      setAuthorName={setAuthorName}
      setSelectedGenre={setSelectedGenre}
      selectedGenre={selectedGenre}
      searchInput={search}
      authorFilter={authorFilter}
      authorName={authorName}/>
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
"use client"
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import FilterModal from "./filter";
import AddBookModal from "./addBookModal"; // Import the new AddBookModal component

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false); // State to manage AddBookModal
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [authorFilter, setAuthorFilter] = useState([]);
    const [authorName, setAuthorName] = useState("");

    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    const removeItemFromGenre = (genreToRemove) => {
        setSelectedGenre(selectedGenre.filter(genre => genre !== genreToRemove));
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleAddBookModal = () => {
        setIsAddBookModalOpen(!isAddBookModalOpen); // Toggle AddBookModal visibility
    };

    const handleGenreChange = (e) => {
        if (selectedGenre.includes(e.target.value)){
            return;
        };
        setSelectedGenre([...selectedGenre, e.target.value]);
    };

    const handleAuthorChange = (e) => {
        if (authorFilter.includes(e.target.value)){
            return;
        };
        setAuthorFilter([...authorFilter, e.target.value]);
    };

    const removeAuthor = (authorToRemove) => {
        setAuthorFilter(authorFilter.filter((author) => author !== authorToRemove));
    };
    const handleAuthor = (e) => {
        setAuthorName(e.target.value);
    };

    const applyFilters = () => {
        console.log('Selected Genre:', selectedGenre);
        console.log('Author Filter:', authorFilter);
        toggleModal();
    };

    const handleAddBookSubmit = (newBook) => {
        console.log('New Book:', newBook);
        // Handle the new book data (e.g., send it to a server or update a state)
    };

    return (
        <div className="flex border-b border-accentborders gap-5 p-2 justify-between">
            <div className="hidden sm:flex gap-2">
                <Image src={'/logo.jpg'} width={50} height={50} className="rounded-full" alt="logo" />
                <div className="flex flex-col">
                    <h1 className="font-bold">Book</h1>
                    <h1 className="text-gray-500 font-medium">Station</h1>
                </div>
            </div>

            <div className="md:hidden">
                <BsFilterLeft size={40} />
            </div>

            <div className="flex gap-5 h-full">
                <div className="h-1/2 gap-2 bg-background self-center rounded-xl border border-accentborders p-2 flex justify-center items-center">
                    <MdSearch size={25} />
                    <input onChange={onChangeSearchInput} type="text" placeholder="Search any book" className="bg-inputbg w-full focus:outline-none" />
                    <button onClick={toggleModal} className="flex items-center">
                        <CiFilter size={25} />
                    </button>
                </div>
                <button onClick={toggleAddBookModal} className="h-1/2 flex rounded-lg p-2 items-center justify-center gap-2 bg-accent text-white">
                    <CiSquarePlus size={25} />
                    <p className="hidden sm:inline">Add new book</p>
                </button>
            </div>

            {/* Render FilterModal component */}
            <FilterModal
                isOpen={isModalOpen}
                onClose={toggleModal}
                onApplyFilters={applyFilters}
                selectedGenre={selectedGenre}
                handleGenreChange={handleGenreChange}
                authorFilter={authorFilter}
                handleAuthorChange={handleAuthorChange}
                removeGenre={removeItemFromGenre}
                handleAuthor={handleAuthor}
                authorName={authorName}
                removeAuthor={removeAuthor}
            />

            {/* Render AddBookModal component */}
            <AddBookModal
                isOpen={isAddBookModalOpen}
                onClose={toggleAddBookModal}
                onSubmit={handleAddBookSubmit}
            />
        </div>
    );
};

export default Navbar;

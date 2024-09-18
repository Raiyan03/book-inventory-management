"use client"
/**
 * @component Navbar
 * @description This functional component represents a responsive navigation bar for a book-related application. 
 * It features a logo, a search bar, and a button to add new books. The navbar adapts for mobile views, displaying 
 * a filter icon instead of the logo on smaller screens.
 *
 * @requires Image - Imported from 'next/image', used to display the logo in the navbar.
 * @requires MdSearch - Icon imported from 'react-icons/md', representing the search icon in the search bar.
 * @requires CiSquarePlus - Icon imported from 'react-icons/ci', representing the 'add new book' button.
 * @requires BsFilterLeft - Icon imported from 'react-icons/bs', representing the filter icon for mobile views.
 * @requires useState - React hook for managing the state of the search input.
 *
 * @returns {JSX.Element} A JSX element that renders the navbar.
 */
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";


const Navbar = () => {
    /**
     * @state searchInput - Holds the value of the search input field.
     * @function setSearchInput - Updates the value of searchInput.
     */
    const [ searchInput, setSearchInput] = useState();
    /**
     * @function onChangeSearchInput
     * @description Event handler for updating the search input state when a user types in the search field.
     * @param {object} e - The event object triggered by the input change.
     */
    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="flex border-b border-accentborders gap-5 p-2 justify-between ">
            {/* Logo and brand name visible on larger screens */}
            <div className=" hidden  sm:flex gap-2">
                {/* Logo image */}
                <Image src={'/logo.jpg'} width={50} height={50} className=" rounded-full" alt="logo" />
                {/* Branding text */}
                <div className=" flex flex-col">
                    <h1 className=" font-bold ">
                        Book
                    </h1>
                    <h1 className=" text-gray-500 font-medium">
                        Station
                    </h1>
                </div>
            </div>
            
            {/* Filter icon visible on smaller screens (mobile) */}
            <div className="md:hidden">
                <BsFilterLeft size={40} />
            </div>

            {/* Search bar and 'Add new book' button */}
            <div className=" flex  gap-5  h-full ">
                <div className="h-1/2 gap-2 self-center rounded-xl border border-accentborders   flex justify-center items-center p-2">
                    <MdSearch size={25} />
                    <input onChange={onChangeSearchInput} type="text" placeholder="Search any book" className=" bg-inputbg h-full w-full focus:outline-none"/>
                </div>
                <button className="h-1/2 flex rounded-lg p-2 items-center justify-center gap-2 bg-accent text-white">
                    <CiSquarePlus size={25} />
                    <p className="hidden sm:inline"> Add new book </p>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
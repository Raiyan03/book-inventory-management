"use client"
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";


const Navbar = () => {
    const [ searchInput, setSearchInput] = useState();

    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="flex border-b border-accentborders gap-5 p-2 justify-between ">
            <div className=" hidden  sm:flex gap-2">
                <Image src={'/logo.jpg'} width={50} height={50} className=" rounded-full" alt="logo" />
                <div className=" flex flex-col">
                    <h1 className=" font-bold ">
                        Book
                    </h1>
                    <h1 className=" text-gray-500 font-medium">
                        Station
                    </h1>
                </div>
            </div>
            <div className="md:hidden">
                <BsFilterLeft size={40} />
            </div>
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
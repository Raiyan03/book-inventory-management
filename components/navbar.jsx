"use client"
import Image from "next/image";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
    return (
        <div className=" border flex p-2">
            <div className="flex gap-2">
                <Image src={'/logo.jpg'} width={50} height={50} className=" rounded-full" />
                <div className=" flex flex-col">
                    <h1 className=" font-bold ">
                        Book
                    </h1>
                    <h1 className=" text-gray-500 font-medium">
                        Station
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar
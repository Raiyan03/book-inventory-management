import React, { useState, useEffect, useRef } from "react";
import { FiEdit2, FiMoreHorizontal } from "react-icons/fi";
import { CiExport } from "react-icons/ci";
import Export from "./export";
import { downLoadFile } from "@/lib/utils";

const BookTable = ({ books }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
    const exportDropdownRef = useRef(null); // Reference for the dropdown

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleExport = (type) => {
        downLoadFile(type, books);
        setIsExportDropdownOpen(false); // Close dropdown after export
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target)) {
                setIsExportDropdownOpen(false);
            }
        };

        if (isExportDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isExportDropdownOpen]);

    const filteredBooks = books?.filter((book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="p-4 bg-background">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Inventory Management</h1>
                <div className="flex gap-2 relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 border border-gray-300 rounded-lg"
                        onChange={handleSearch}
                    />
                    <div className="relative" ref={exportDropdownRef}>
                        <button
                            className="bg-green-500 flex gap-2 items-center justify-center text-white px-4 py-2 rounded-lg"
                            onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
                        >
                            <CiExport />
                            Export
                        </button>
                        {isExportDropdownOpen && (
                            <Export handleExport={handleExport} />
                        )}
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        + Add Item
                    </button>
                </div>
            </div>

            <table className="min-w-full bg-background border shadow-lg rounded-xl">
                <thead className="p-2">
                    <tr className="bg-accentborders text-left">
                        <th className="py-2 px-4 border-b">Entry ID</th>
                        <th className="py-2 px-4 border-b">Title</th>
                        <th className="py-2 px-4 border-b">Author</th>
                        <th className="py-2 px-4 border-b">Genre</th>
                        <th className="py-2 px-4 border-b">Publication Date</th>
                        <th className="py-2 px-4 border-b">Stock</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks?.length > 0 ? (
                        filteredBooks.map((book) => (
                            <tr key={book.entry_id} className="hover:bg-accent p-3 rounded-xl">
                                <td className="py-2 px-4 border-b">{book.entry_id}</td>
                                <td className="py-2 px-4 border-b">{book.title}</td>
                                <td className="py-2 px-4 border-b">{book.author}</td>
                                <td className="py-2 px-4 border-b">{book.genre}</td>
                                <td className="py-2 px-4 border-b">{new Date(book.publication_date).toLocaleDateString()}</td>
                                <td className="py-2 px-4 border-b text-center">{book.stock}</td>
                                <td className="py-2 px-4 border-b text-center">
                                    <div className="flex items-center justify-center gap-4">
                                        <button className="">
                                            <FiEdit2 />
                                        </button>
                                        <button className="">
                                            <FiMoreHorizontal />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center py-4 text-gray-500">
                                No books found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;

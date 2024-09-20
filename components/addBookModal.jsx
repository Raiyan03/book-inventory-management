"use client"
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const AddBookModal = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [isbn, setIsbn] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = () => {
        const newBook = {
            title,
            author,
            genre,
            publication_date: publicationDate,
            isbn,
            stock
        };
        onSubmit(newBook);
        onClose();
    };

    if (!isOpen) return null; // Do not render if modal is not open

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xl h-auto">
                <div className="flex justify-between items-center mb-2">
                    <h2 className=" text-black text-lg font-bold">Add New Book</h2>
                    <button onClick={onClose}>
                        <AiOutlineClose size={20} />
                    </button>
                </div>

                {/* Form container */}
                <div className="space-y-2">
                    {/* First Row - Title and Author */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-2 text-black border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter book title"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Author</label>
                            <input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="w-full p-2 text-black border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter author name"
                            />
                        </div>
                    </div>

                    {/* Second Row - Genre and Publication Date */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Genre</label>
                            <input
                                type="text"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                className="w-full p-2 text-black border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter genre"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Publication Date</label>
                            <input
                                type="date"
                                value={publicationDate}
                                onChange={(e) => setPublicationDate(e.target.value)}
                                className="w-full text-black p-2 border-2 border-gray-300 rounded-lg focus:outline-accent"
                            />
                        </div>
                    </div>

                    {/* Third Row - ISBN and Stock */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">ISBN</label>
                            <input
                                type="text"
                                value={isbn}
                                onChange={(e) => setIsbn(e.target.value)}
                                className="w-full text-black p-2 border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter ISBN"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Stock</label>
                            <input
                                type="number"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                className="w-full p-2 text-black border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter stock quantity"
                                min={0}
                            />
                        </div>
                    </div>
                </div>

                {/* Submit button */}
                <div className="flex justify-end mt-4">
                    <button onClick={handleSubmit} className="px-4 py-2 bg-accent text-white rounded-lg">
                        Add Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBookModal;
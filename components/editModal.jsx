import React, { useState } from "react";

const EditModal = ({ book, isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [genre, setGenre] = useState(book.genre);
    const [isbn, setIsbn] = useState(book.isbn);
    const [stock, setStock] = useState(book.stock);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const handleGenreChange = (e) => setGenre(e.target.value);
    const handleIsbnChange = (e) => setIsbn(e.target.value);
    const handleStockChange = (e) => setStock(e.target.value);

    if (!isOpen) return null; // If modal is not open, don't render anything

    const handleSave = () => {
        const updatedBook = {
            ...book,
            title,
            author,
            genre,
            isbn,
            stock,
        };
        onSave(updatedBook); // Call the save function and pass updated book
        onClose(); // Close the modal
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="text-2xl text-black font-bold mb-4">Edit Book</h2>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block mb-2 text-sm text-black font-medium">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            className="w-full focus:outline-accent border-2 p-2 border-accentborders text-black rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block text-black mb-2 text-sm font-medium">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={handleAuthorChange}
                            className="w-full focus:outline-accent border-2 p-2 border-accentborders text-black rounded-lg" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block text-black mb-2 text-sm font-medium">Genre</label>
                        <input
                            type="text"
                            value={genre}
                            onChange={handleGenreChange}
                            className="w-full focus:outline-accent border-2 p-2 border-accentborders text-black rounded-lg" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block text-black mb-2 text-sm font-medium">ISBN</label>
                        <input
                            type="text"
                            value={isbn}
                            onChange={handleIsbnChange}
                            className="w-full focus:outline-accent border-2 p-2 border-accentborders text-black rounded-lg" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block text-black mb-2 text-sm font-medium">Stock</label>
                        <input
                            type="number"
                            value={stock}
                            onChange={handleStockChange}
                            min={0}
                            className="w-full focus:outline-accent border-2 p-2 border-accentborders text-black rounded-lg" />
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button onClick={onClose} className="px-4 py-2 bg-accentborders rounded-lg">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 bg-accent text-white rounded-lg">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
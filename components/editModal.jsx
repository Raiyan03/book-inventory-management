import React, { useState } from "react";

const EditModal = ({ book, isOpen, onClose, onSave }) => {
    const formatDate = (date) => {
        const d = new Date(date);
        const month = `0${d.getMonth() + 1}`.slice(-2);
        const day = `0${d.getDate()}`.slice(-2);
        const year = d.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [genre, setGenre] = useState(book.genre);
    const [isbn, setIsbn] = useState(book.isbn);
    const [stock, setStock] = useState(book.stock);
    const [publicationDate, setPublicationDate] = useState(formatDate(book.publication_date));

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const handleGenreChange = (e) => setGenre(e.target.value);
    const handleIsbnChange = (e) => setIsbn(e.target.value);
    const handleStockChange = (e) => setStock(e.target.value);
    const handlePublicationDateChange = (e) => setPublicationDate(e.target.value);

    if (!isOpen) return null; // If modal is not open, don't render anything

    const handleSave = () => {
        const updatedBook = {
            ...book,
            title,
            author,
            genre,
            isbn,
            stock,
            publication_date: publicationDate,
        };
        onSave(updatedBook); // Call the save function and pass updated book
        onClose(); // Close the modal
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="text-2xl text-black font-bold mb-4">Edit Book</h2>
                <div className="space-y-2">
                    {/* First Row - Title and Author */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                className="w-full p-2 text-black border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter book title"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Author</label>
                            <input
                                type="text"
                                value={author}
                                onChange={handleAuthorChange}
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
                                onChange={handleGenreChange}
                                className="w-full p-2 text-black border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter genre"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Publication Date</label>
                            <input
                                type="date"
                                value={publicationDate}
                                onChange={handlePublicationDateChange}
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
                                onChange={handleIsbnChange}
                                className="w-full text-black p-2 border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter ISBN"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-black text-sm font-medium mb-1">Stock</label>
                            <input
                                type="number"
                                value={stock}
                                onChange={handleStockChange}
                                className="w-full p-2 text-black border-2 border-gray-300 rounded-lg focus:outline-accent"
                                placeholder="Enter stock quantity"
                                min={0}
                            />
                        </div>
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
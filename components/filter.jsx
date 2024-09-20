import { AiOutlineClose } from "react-icons/ai";
import FilterCards from "./filterCards";
import { useState, useEffect } from "react";
import FilterAuthor from "./filterAuthor"
import { getAuthorsCall, getBooksGenreCall } from "@/server/calls";

/**
 * @component FilterModal
 * @description This functional component represents a modal for filtering books by genre and author.
 *
 * @param {boolean} isOpen - Determines whether the modal is open or closed.
 * @param {function} onClose - Function to close the modal.
 * @param {function} onApplyFilters - Function to apply the selected filters.
 * @param {array} selectedGenre - Holds the array of currently selected genres.
 * @param {function} handleGenreChange - Function to update the selected genre.
 * @param {string} authorFilter - Holds the author filter input value.
 * @param {function} handleAuthorChange - Function to update the author filter input.
 * @param {function} removeGenre - Function to remove a selected genre.
 *
 * @returns {JSX.Element} A JSX element that renders the filter modal.
 */
const FilterModal = ({
    isOpen,
    onClose,
    clearFilters,
    selectedGenre,
    handleGenreChange,
    authorName,
    authorFilter,
    handleAuthorChange,
    handleAuthor,
    removeGenre,
    removeAuthor
}) => {
    const [filteredAuthors, setFilteredAuthors] = useState([]);
    const [authorsList, setAuthorsList] = useState([]); // State to hold the list of authors
    const [genresList, setGenresList] = useState([]); // State to hold the list of genres
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await getAuthorsCall();
                const rows = response.data.data.map((author) => author.author);
                const genres = await getBooksGenreCall();
                const genreList = genres.data.data.map((genre) => genre.genre);
                setGenresList(genreList);
                setAuthorsList(rows);
            } catch (error) {
                console.error("Error fetching authors:", error);
            };
        };
        fetchData();
    }, []);
    
    const handleAuthorInputChange = (e) => {
        const input = e.target.value;
        handleAuthor(e); // Update the parent state with the input value

        if (input) {
            const filtered = authorsList.filter((author) => author.toLowerCase().includes(input.toLowerCase()));
            setFilteredAuthors(filtered);
        } else{
            setFilteredAuthors([]);
        }
    };

    const handleAuthorSelect = (author) => {
        console.log("Cliked at ", author);
        handleAuthorChange({ target: { value: author } });
        handleAuthor({ target: { value: "" } });
        setFilteredAuthors([]);
    };

    if (!isOpen) return null; // If the modal is not open, do not render anything

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-black">Filter Books</h2>
                    <button onClick={onClose}>
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-black">Select Genre</label>
                    <select
                        value={selectedGenre}
                        onChange={handleGenreChange}
                        className="w-full p-2 border-2 text-black focus:outline-accent border-gray-300 rounded-lg"
                    >
                        <option value="">All Genres</option>
                        {genresList.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                    <div className=" flex flex-wrap gap-1 py-1">
                        {selectedGenre.map((genre, index) => (
                            <FilterCards key={index} name={genre} remove={removeGenre} />
                        ))}
                    </div>
                </div>
                <div className="mt-4 relative">
                    <label className="block mb-2 text-sm font-medium text-black">Filter by Author</label>
                    <input
                        type="text"
                        value={authorName}
                        onChange={handleAuthorInputChange}
                        placeholder="Enter author name"
                        className="w-full p-2 border-2 text-black focus:outline-accent border-gray-300 rounded-lg"
                    />
                    <div className=" flex flex-wrap gap-1 py-1">
                        {authorFilter.map((author, index) => (
                            <FilterCards key={index} name={author} remove={removeAuthor}  />
                        ))}
                    </div>
                    {/* Author dropdown */}
                    {filteredAuthors.length > 0 && (
                        <FilterAuthor filteredAuthors={filteredAuthors} handleAuthorSelect={handleAuthorSelect} />
                    )}
                </div>
                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={clearFilters} className="px-4 py-2 bg-accentborders rounded-lg">Clear filters</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
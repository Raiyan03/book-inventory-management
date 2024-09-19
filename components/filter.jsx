import { AiOutlineClose } from "react-icons/ai";

/**
 * @component FilterModal
 * @description This functional component represents a modal for filtering books by genre and author.
 *
 * @param {boolean} isOpen - Determines whether the modal is open or closed.
 * @param {function} onClose - Function to close the modal.
 * @param {function} onApplyFilters - Function to apply the selected filters.
 * @param {string} selectedGenre - Holds the currently selected genre.
 * @param {function} handleGenreChange - Function to update the selected genre.
 * @param {string} authorFilter - Holds the author filter input value.
 * @param {function} handleAuthorChange - Function to update the author filter input.
 *
 * @returns {JSX.Element} A JSX element that renders the filter modal.
 */
const FilterModal = ({
    isOpen,
    onClose,
    onApplyFilters,
    selectedGenre,
    handleGenreChange,
    authorFilter,
    handleAuthorChange
}) => {
    if (!isOpen) return null; // If the modal is not open, do not render anything

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Filter Books</h2>
                    <button onClick={onClose}>
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium">Select Genre</label>
                    <select
                        value={selectedGenre}
                        onChange={handleGenreChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="">All Genres</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="mystery">Mystery</option>
                        {/* Add more genres as needed */}
                    </select>
                </div>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium">Filter by Author</label>
                    <input
                        type="text"
                        value={authorFilter}
                        onChange={handleAuthorChange}
                        placeholder="Enter author name"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
                    <button onClick={onApplyFilters} className="px-4 py-2 bg-accent text-white rounded-lg">Apply Filters</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;

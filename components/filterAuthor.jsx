const FilterAuthor = ({
    filteredAuthors,
    handleAuthorSelect,
     // Ensure this prop is passed to handle selection
}) => {
    return (
        <ul
            className="absolute z-10 w-full mt-1 bg-white border-2 text-black border-gray-300 rounded-lg shadow-lg overflow-y-auto custom-scrollbar"
            style={{ maxHeight: '150px' }} // Set max-height to limit the height of the dropdown
        >
            {filteredAuthors.map((author, index) => (
                <li
                    key={index}
                    onClick={() => handleAuthorSelect(author)}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                >
                    {author}
                </li>
            ))}
        </ul>
    );
};

export default FilterAuthor;

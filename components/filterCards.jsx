import { AiOutlineClose } from "react-icons/ai";

const FilterCards = ({
    name,
    remove
}) => {

    const del = () => {
        remove(name);
    };
    return(
        <div className="flex bg-accentborders rounded-lg gap-1 p-1">
            {name}
            <button>
                <AiOutlineClose onClick={del} />
            </button>
        </div>
    );
};

export default FilterCards;
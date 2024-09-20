import { CiExport } from "react-icons/ci"

const Export = ({handleExport}) => {

    return (
    <div className="absolute right-0 mt-2 w-32 border-accentborders bg-background border shadow-black shadow rounded-lg">
        <ul>
            <li
                className="px-4 py-2 flex gap-2 items-center hover:bg-accent rounded-t-lg cursor-pointer"
                onClick={() => handleExport("json")}
            >
                <CiExport />
                JSON
            </li>
            <li
                className="px-4 py-2 flex gap-2 items-center hover:bg-accent cursor-pointer rounded-b-lg"
                onClick={() => handleExport("csv")}
            >
                <CiExport />
                CSV
            </li>
        </ul>
    </div>
    )
}

export default Export;
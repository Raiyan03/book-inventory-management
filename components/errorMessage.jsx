import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div className=" my-2   flex items-center justify-center text-red-700 px-4 py-2 relative mb-4">
            <div className="flex items-center border p-2 border-red-400 rounded bg-red-100  gap-2 justify-center">
                <IoWarningOutline size={20} />
                <span className="block sm:inline">{message}</span>
            </div>
        </div>
    );
};

export default ErrorMessage;
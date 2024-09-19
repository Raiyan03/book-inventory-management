import React from "react";

const DeleteConfirmation = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) return null; // If popup is not open, don't render anything

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Are you sure you want to delete this book?</h2>
                <div className="flex justify-end gap-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg">
                        Cancel
                    </button>
                    <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
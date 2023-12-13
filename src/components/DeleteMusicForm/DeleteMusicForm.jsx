import React from "react";
import axios from "axios";

const DeleteMusicForm = ({ musicId, onDelete }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://localhost:7063/api/Songs/${musicId}`
      );
    } catch (error) {
      console.warn("Error deleting music:", error);
    }
  };

  return (
    <button
      className="delete-button btn btn-outline-danger"
      onClick={handleDelete}
    >
      Delete Music
    </button>
  );
};

export default DeleteMusicForm;

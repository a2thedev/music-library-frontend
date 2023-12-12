import React from "react";
import axios from "axios";

const DeleteMusicForm = ({ musicId, onDelete }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://localhost:7063/api/Songs/${musicId}`
      );
      if (response.status === 204) {
        onDelete();
      }
    } catch (error) {
      console.warn("Error deleting music:", error);
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete Music
    </button>
  );
};

export default DeleteMusicForm;

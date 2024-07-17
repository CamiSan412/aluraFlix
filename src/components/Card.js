import React from 'react';

const Card = ({ id, image, onDelete, onEdit, borderColor }) => {
  const handleDelete = () => {
    onDelete(id); // Llamar a onDelete con el id del video
  };

  const handleEdit = () => {
    onEdit(id); // Llamar a onEdit con el id del video
  };

  return (
    <div className="card" style={{ border: `2px solid ${borderColor}` }}>
      <img src={image} alt="Card" className="card-img-top" />
      <div className="flex justify-around card-body bg-[#000] h-10 text-white">
        <button className="btn btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
        <button className="btn btn-primary" onClick={handleEdit}>
          Editar
        </button>
      </div>
    </div>
  );
};

export default Card;






import React, { useState, useEffect } from 'react';

const Modal = ({ mostrarModal, setMostrarModal, video, handleEditVideo }) => {

  const [updatedVideo, setUpdatedVideo] = useState(video);

  useEffect(() => {
    setUpdatedVideo(video);
  }, [video]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedVideo({ ...updatedVideo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guardando cambios:", updatedVideo);
    handleEditVideo(updatedVideo);
    setMostrarModal(false);
  };

  if (!mostrarModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-1/2">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-4">Editar Video</h2>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={updatedVideo.title}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Categoría"
            value={updatedVideo.category}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Imagen URL"
            value={updatedVideo.image}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="text"
            name="video"
            placeholder="Video URL"
            value={updatedVideo.video}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={updatedVideo.description}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          ></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </form>
        <button onClick={() => setMostrarModal(false)} className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;



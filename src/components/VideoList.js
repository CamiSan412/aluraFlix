import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import CategorySection from './CategorySection';

const VideoList = ({ videos }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videosList, setVideosList] = useState(videos);

  const handleDelete = (id) => {
    // Filtrar los videos para eliminar el video con el id especificado
    const updatedVideos = videosList.filter(video => video.id !== id);
    // Actualizar el estado de videosList con los videos filtrados
    setVideosList(updatedVideos);
  };

  const handleEdit = (id) => {
    // Encontrar el video con el id especificado
    const video = videosList.find((video) => video.id === id);
    // Establecer el video actual para editar
    setCurrentVideo(video);
    // Mostrar el modal de edición
    setShowModal(true);
  };

  const handleEditVideo = (updatedVideo) => {
    // Mapear los videos y actualizar el video editado
    const updatedVideos = videosList.map((video) =>
      video.id === updatedVideo.id ? updatedVideo : video
    );
    // Actualizar el estado de videosList con los videos actualizados
    setVideosList(updatedVideos);
    // Ocultar el modal de edición
    setShowModal(false);
  };

  return (
    <div className="video-list">
      {videosList.map(video => (
        <Card
          key={video.id}
          id={video.id}
          image={video.image}
          onDelete={() => handleDelete(video.id)}
          onEdit={() => handleEdit(video.id)}
          borderColor={'#000'} // Ajusta el color de borde según la categoría
        />
      ))}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          video={currentVideo}
          handleEditVideo={handleEditVideo}
        />
      )}
      <CategorySection
        category="Frontend"
        videos={videosList}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default VideoList;


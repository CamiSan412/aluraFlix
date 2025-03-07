import { useState } from 'react';
import Modal from './Modal';
import React from 'react';
import Card from './Card';

const CategorySection = ({ category, videos, setVideos }) => {
   
   const [videoSeleccionado, setVideoSeleccionado] = useState(null)
   const [mostrarModal, setMostrarModal] = useState(false)

  let categoryColor = '';
  let categoryBorderColor = '';

  // Asignar colores según la categoría
  switch (category) {
    case 'Frontend':
      categoryColor = '#6BD1FF';
      categoryBorderColor = '#6BD1FF';
      break;
    case 'Backend':
      categoryColor = '#00C86F';
      categoryBorderColor = '#00C86F';
      break;
    case 'Innovacion y Gestion':
      categoryColor = '#FFBA05';
      categoryBorderColor = '#FFBA05';
      break;
    default:
      categoryColor = '#333'; // Color por defecto si no hay coincidencia
      categoryBorderColor = '#333';
      break;
  }

  const handleDelete = async (id) => {
      try{
        const response = await fetch(`http://localhost:3002/videos/${id} `, {
          method: 'DELETE',
        })
        if (!response.ok) throw new Error('Error al eliminar')    
        
          setVideos(videos.filter(video => video.id !== id))
      }catch(error){
        console.error(error)
      }    
  }

  const handleEdit = video => {
    console.log("Editando video:", video);
    setVideoSeleccionado(video)
    setMostrarModal(true)
  }

  const handleEditVideo = async (updatedVideo) => {
    try{
      const response = await fetch( `http://localhost:3002/videos/${updatedVideo.id} `, {
        method:'PUT',
        headers:{
          "Content-Type": "application/json",          

      },
      body: JSON.stringify(updatedVideo),
      })

      if (!response.ok) throw new Error('Error al actualizar')

      const data = await response.json()

      setVideos(videos.map(video => video.id === data.id ? data : video))
      setMostrarModal(false)

    }catch(error){
      console.log('Error al editar el video', error)
        }

  }

  return (
    <div className="m-8">
      <h2 className="text-2xl max-lg:text-lg font-bold mb-4 py-2 px-4 rounded-md text-white w-1/2" style={{ backgroundColor: categoryColor }}>
        {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div className="mb-4" key={index}>
            <Card
              id={video.id} // Pasar el id del video
              image={video.image} // Pasar la URL de la imagen
              onDelete={handleDelete} // Llamar a onDelete con el id del video
              onEdit={() => handleEdit(video)} // Llamar a onEdit con el id del video
              borderColor={categoryBorderColor}   // Pasar el color del borde a Card
            />
          </div>
        ))}
      </div>

      { mostrarModal && (
        <Modal 
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          video={videoSeleccionado}
          handleEditVideo={handleEditVideo}
        />
      )}
    </div>
  );
};

export default CategorySection;


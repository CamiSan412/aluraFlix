import React from 'react';
import Card from './Card';

const CategorySection = ({ category, videos, onDelete, onEdit }) => {
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

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 py-2 px-4 rounded-md text-white w-1/3" style={{ backgroundColor: categoryColor }}>
        {category}
      </h2>
      <div className="flex flex-row gap-10">
        {videos.map((video, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card
              id={video.id} // Pasar el id del video
              image={video.image} // Pasar la URL de la imagen
              onDelete={() => onDelete(video.id)} // Llamar a onDelete con el id del video
              onEdit={() => onEdit(video.id)} // Llamar a onEdit con el id del video
              borderColor={categoryBorderColor}   // Pasar el color del borde a Card
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;


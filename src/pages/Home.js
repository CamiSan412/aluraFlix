// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import BannerCarousel from '../components/BannerCarousel';
import CategorySection from '../components/CategorySection';
import background from '../imgs/bg.png'; // Importa el fondo


const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
 

  useEffect(() => {
    // Reemplaza la URL con la ruta correcta a tu json-server
    fetch('http://localhost:3002/videos')
      .then(response => response.json())
      .then(data => {
        console.log('Datos recibidos', data)
        setVideos(data);

        // Obtener las categorías únicas
        const uniqueCategories = [...new Set(data.map(video => video.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);
   
  return (
    <div className="w-full bg-[#262626]">
      <div className="bg-auto  w-full bg-center py-16 bg-no-repeat opacity-80" style={{ backgroundImage: `url(${background})` }}>
        <BannerCarousel videos={videos} />
      </div>
      <div className="container mx-auto py-8">
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            category={category}
            videos={videos.filter(video => video.category === category)}
            setVideos={setVideos}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

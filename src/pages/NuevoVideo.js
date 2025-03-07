import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NuevoVideo = () => {
    const [video, setVideo] = useState({ title: '', category: '', image: '', video: '', description: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVideo({ ...video, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        })
        .then(response => response.json())
        .then(() => {
            navigate('/');
        })
        .catch(error => console.error('Error adding video:', error));
    };

    const handleReset = () => {
        setVideo({ title: '', category: '', image: '', video: '', description: '' });
    };

    return (
        <div className="h-screen w-full bg-[#000]">
            <h2 className="text-4xl text-[#fff] p-10 text-center font-bold">NUEVO VIDEO</h2>
            <h4 className="text-[#fff] m-5 text-center text-xl">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h4>
            <div className="border-y text-[#fff] text-2xl p-3 m-10 h-15">Crear Tarjeta</div>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="p-6 rounded shadow-md w-3/4">
                    <div className="flex justify-around">
                        <input
                            type="text"
                            name="title"
                            placeholder="Ingrese el Titulo"
                            value={video.title}
                            onChange={handleChange}
                            className="w-5/12 bg-gray-500 mb-4 p-2 border-gray-700 text-white rounded focus:border-red-500 focus:text-red-800"
                        />
                        <select
                            name="category"
                            value={video.category}
                            onChange={handleChange}
                            className="w-5/12 bg-gray-500 border-gray-700 text-white mb-4 p-2 border rounded focus:border-red-500 focus:text-red-800"
                        >
                            <option value="">Seleccione una categoría</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Innovacion y Gestion">Innovación y Gestión</option>
                        </select>
                    </div>
                    <div className="flex justify-around">
                        <input
                            type="text"
                            name="image"
                            placeholder="Ingrese la URL de la Imagen"
                            value={video.image}
                            onChange={handleChange}
                            className="w-5/12 bg-gray-500 border-gray-700 text-white mb-4 p-2 border rounded focus:border-red-500 focus:text-red-800"
                        />
                        <input
                            type="text"
                            name="video"
                            placeholder="Ingrese la URL del Video"
                            value={video.video}
                            onChange={handleChange}
                            className="w-5/12 bg-gray-500 border-gray-700 text-white mb-4 p-2 border rounded focus:border-red-500 focus:text-red-800"
                        />
                    </div>
                    <div className="flex justify-normal ml-12">
                        <textarea
                            name="description"
                            placeholder="¿De qué se trata este video?"
                            value={video.description}
                            onChange={handleChange}
                            className="w-5/12 bg-gray-500 mb-4 p-2 border-gray-700 text-white border rounded focus:border-red-500 focus:text-red-800"
                        />
                    </div>
                    <div className="flex justify-normal ml-12 gap-6">
                        <button type="submit" onClick={handleSubmit} className="border-4 rounded border-[#2271D1] text-white p-2 m-4">Guardar</button>
                        <button type="button" onClick={handleReset} className="border-4 rounded border-[#fff] text-white p-2 m-4">Limpiar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NuevoVideo;




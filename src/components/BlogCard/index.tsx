"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';

const BlogCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePublishClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para publicar el contenido del blog
    console.log('Título del blog:', title);
    console.log('Contenido del blog:', content);
    // Por ejemplo, podrías enviar el contenido a una API para guardarlo en la base de datos
    // Luego podrías reiniciar los estados para limpiar los campos del formulario
    setTitle('');
    setContent('');
    setShowForm(false); // Oculta el formulario después de enviar
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {showForm ? (
        <form onSubmit={handleSubmit} className="px-6 py-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              id="title"
              className="w-full mt-1 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Título del blog"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenido</label>
            <textarea
              id="content"
              className="w-full mt-1 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Escribe tu blog aquí..."
              value={content}
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Publicar
            </button>
          </div>
        </form>
      ) : (
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Crear nuevo blog</div>
          <p className="text-gray-700 text-base">
            Aquí puedes comenzar a redactar tu nuevo blog y publicarlo cuando esté listo.
          </p>
          <div className="flex justify-end mt-4">
            <button
              onClick={handlePublishClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Publicar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;

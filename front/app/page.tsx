'use client';

import React, { useState } from 'react'; // Importez useState depuis React
import { useRouter } from 'next/router'; // Importez useRouter depuis next/router


export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header avec la barre latérale */}
      <header className="flex bg-gray-800 text-white justify-between">
        {/* Barre latérale */}
        <aside className="bg-gray-800 text-white w-1/4 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <nav className="flex flex-col space-y-4">
            {/* Contenu du menu */}
          </nav>
        </aside>
        
        {/* Boutons de connexion et d'inscription */}
        <div className="flex items-center mr-8">
          <Link href="/signin">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
              Inscription
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Connexion
            </button>
          </Link>
        </div>
      </header>
      
      {/* Contenu principal avec l'image de fond */}
      <main className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('/background.png')"}}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-red-400">Bienvenue sur notre site !</h1>
        </div>
      </main>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';import { useRouter } from 'next/router'; 
import dynamic from 'next/dynamic'; // Importer dynamic depuis next/dynamic


import React, { useState } from 'react';


const DynamicComponentWithNoSSR = dynamic(() => import('next/router'), {
    ssr: false,
  });
  export default function AdminLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showProfile, setShowProfile] = useState(false); // Définir showProfile et initialiser à false

  
    const handleLogin = (e) => {
      e.preventDefault();
      const router = DynamicComponentWithNoSSR.useRouter(); // Utiliser useRouter à l'intérieur de la fonction
  
      // Vérifier si le nom d'utilisateur est "admin" et le mot de passe est "root"
      if (username === 'admin' && password === 'root') {
        // Rediriger vers la page d'administration en utilisant le router
        router.push('/admin');
      } else {
        // Afficher un message d'erreur ou effectuer d'autres actions en cas d'informations incorrectes
        console.log('Identifiants incorrects');
      }
      // Réinitialiser les champs après la soumission du formulaire
      setUsername('');
      setPassword('');
    };
  
  return (
    <div className="flex flex-col h-screen">
      <header className="flex bg-gray-800 text-white justify-between items-center">
        <aside className="bg-gray-800 text-white w-1/4 flex flex-col justify-center items-center py-8"></aside>
        <div className="flex items-center mr-8">
          <button onClick={() => setShowProfile(true)} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow">
            Profil
          </button>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/background.png)'}}>
        <div className="flex flex-wrap justify-center">
          <form onSubmit={handleLogin} className="feature-box bg-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Connexion Administrateur</h2>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold">Nom d'utilisateur :</label>
              <input
  type="text"
  id="username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Entrez votre nom d'utilisateur"
  className="block w-full px-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black text-white"
  style={{ height: "3rem" }}
/>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold">Mot de passe :</label>
              <div className="mb-4">
  {/* Replacez la zone de saisie de mot de passe existante par celle-ci */}
  <input
    type="password"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Entrez votre mot de passe"
    className="block w-full px-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black text-white"
    style={{ height: "3rem" }}
  />
</div>
            </div>
            <button type="submit" className="bg-black hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow">Se connecter</button>
          </form>
          {/* Ajoutez les autres boîtes ici */}
        </div>
      </main>
      {showProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Mon Profil</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Nom :</label>
              <span className="block text-gray-900">{user.name}</span>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Fonction :</label>
              <span className="block text-gray-900">{user.function}</span>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setShowProfile(false)} className="bg-red-500 text-white font-bold py-2 px-4 rounded shadow">Fermer</button>
            </div>
          </div>
        </div>
      )}
      {/* Ajoutez les autres popups ici */}
    </div>
  );
}

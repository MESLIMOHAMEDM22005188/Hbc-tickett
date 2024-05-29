import React, { useState } from 'react';
import { useRouter } from 'next/router';
const AdminPage = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header avec la barre latérale */}
      <header className="flex bg-gray-800 text-white justify-between items-center">
        {/* Barre latérale */}
        <aside className="bg-gray-800 text-white w-1/4 flex flex-col justify-center items-center py-8">
          {/* Contenu de la barre latérale */}
        </aside>

        {/* Bouton de profil */}
        <div className="flex items-center mr-8">
          <button onClick={() => setShowProfile(!showProfile)} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow">
            Profil
          </button>
        </div>
      </header>

      {/* Contenu principal avec l'image de fond */}
      <main className="flex-1 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.png)' }}>
        <div className="flex flex-wrap justify-center">
          {/* Boîtes de fonctionnalités */}
          {features.map((feature, index) => (
            <div key={index} className={`feature-box ${feature.color}`}>
              <h2 className="text-xl font-semibold mb-4">{feature.title}</h2>
              <a href={feature.link} className="bg-black hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow">Voir</a>
            </div>
          ))}
        </div>
      </main>

      {/* Popup de profil */}
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
    </div>
  );
};

export default AdminPage;

const features = [
  { title: "Créer un ticket", link: "/createTicket", color: "bg-blue-500" },
  { title: "Boite de réception", link: "/inbox", color: "bg-orange-500" },
  { title: "Supprimer un ticket", link: "/deleteTicket", color: "bg-red-500" },
  { title: "Voir mes tickets", link: "/myTickets", color: "bg-green-500" },
  { title: "Historique", link: "/history", color: "bg-purple-500" },
];

const user = {
  name: "Admin32323",
  function: "Admin",
};

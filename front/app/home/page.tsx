import Link from 'next/link';

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
          <Link href="/profil">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Profil
            </button>
          </Link>
        </div>
      </header>
      
      {/* Contenu principal avec l'image de fond */}
      <main className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('/background.png')"}}>
        <div className="flex flex-col justify-center items-center h-full">
          <Link href="/delateticket">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold text-xl py-10 px-20 rounded-lg border-black border-2 transition duration-300 ease-in-out mb-4">
              Supprimer un ticket
            </button>
          </Link>
          <Link href="/supprimer-un-ticket">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-10 px-20 rounded-lg border-black border-2 transition duration-300 ease-in-out mb-4">
              Créer un ticket
            </button>
          </Link>
          <Link href="/supprimer-un-ticket">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-10 px-20 rounded-lg border-black border-2 transition duration-300 ease-in-out mb-4">
              Voir mes tickets
            </button>
          </Link>
        </div>
        
      </main>
    </div>
  );
}

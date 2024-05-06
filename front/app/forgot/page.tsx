import Link from 'next/link';

export default function Forgot() {
  return (
    <div className="flex flex-col h-screen">
      
      {/* Contenu principal avec formulaire de réinitialisation du mot de passe */}
      <main className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('/background.png')"}}>
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Mot de passe oublié ?</h1>
            <p className="text-gray-700 mb-6 text-center">Pas de soucis ! Choisissez une option de réinitialisation :</p>
            <div className="flex flex-col space-y-4">
              {/* Option: Réinitialiser par e-mail */}
              <Link href="/reset-by-email">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
                  Réinitialiser par e-mail
                </button>
              </Link>
              {/* Option: Réinitialiser par numéro de téléphone */}
              <Link href="/reset-by-phone">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
                  Réinitialiser par numéro de téléphone
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

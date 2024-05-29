import Link from 'next/link';

const deleteTicket = (id: number) => {
  console.log("Ticket supprimé avec succès", id);
};

export default function DeleteTicket() {
  const tickets = [
    { id: 1, title: "Ticket 1" },
    { id: 2, title: "Ticket 2" },
    { id: 3, title: "Ticket 3" },
    { id: 4, title: "Ticket 4" }
  ];

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('/background.png')"}}>
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Tickets</h1>
            <div className="flex flex-col space-y-4">
              {tickets.map(ticket => (
                <div key={ticket.id} className="bg-gray-200 p-4 rounded-md">
                  <h2 className="text-lg font-semibold">{ticket.title}</h2>
                  <button onClick={() => deleteTicket(ticket.id)} className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring focus:ring-red-300">
                    Supprimer
                  </button>
                </div>
              ))}

              <Link href="/">
                <div className="text-blue-500 hover:underline text-center">Retour</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

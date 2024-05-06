import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <main style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

            <div style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                border: '3px solid #117bff',
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
            }}>
                <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', zIndex: '1' }}>
                    <Image src="/closeyeti.png" alt="Close Yeti" width={120} height={120} />
                </div>
                <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#000000', fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif', fontWeight: '600', lineHeight: '1.1', letterSpacing: '0em', zIndex: '2' }}>Inscrivez-vous</h1>
                <form style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: '0 0 48%', marginBottom: '10px' }}>
                        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#000000', display: 'block' }}>Nom</label>
                        <input type="text" placeholder="Nom" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000', width: '100%' }} />
                    </div>
                    <div style={{ flex: '0 0 48%', marginBottom: '10px' }}>
                        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#000000', display: 'block' }}>Prénom</label>
                        <input type="text" placeholder="Prénom" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000', width: '100%' }} />
                    </div>
                    <div style={{ flex: '0 0 48%', marginBottom: '10px' }}>
                        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#000000', display: 'block' }}>Adresse e-mail</label>
                        <input type="email" placeholder="Adresse e-mail" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000', width: '100%' }} />
                    </div>
                    <div style={{ flex: '0 0 48%', marginBottom: '10px' }}>
                        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#000000', display: 'block' }}>Nom d'utilisateur</label>
                        <input type="text" placeholder="Nom d'utilisateur" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000', width: '100%' }} />
                    </div>
                    <div style={{ flex: '0 0 48%', marginBottom: '10px' }}>
                        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#000000', display: 'block' }}>Date de naissance</label>
                        <input type="date" placeholder="Date de naissance" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000', width: '100%' }} />
                    </div>
                    <div style={{ flex: '0 0 48%', marginBottom: '10px' }}>
                        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#000000', display: 'block' }}>Sexe</label>
                        <select style={{ padding: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000', width: '100%' }}>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                    <div style={{ flex: '0 0 48%', marginBottom: '10px' }}>
                        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#000000', display: 'block' }}>Numéro de téléphone</label>
                        <input type="tel" placeholder="Numéro de téléphone" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000', width: '100%' }} />
                    </div>
                   
                    <div style={{ width: '100%', textAlign: 'right' }}>
                        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#117bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>S'inscrire</button>
                    </div>
                   
                    <div style={{ width: '100%', textAlign: 'left' }}>
                        {/* Utilisation de la composante Link pour rediriger vers la page login */}
                        <Link href="/login">
                            <button style={{ padding: '10px 20px', backgroundColor: '#117bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Déjà un compte ?</button>
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}

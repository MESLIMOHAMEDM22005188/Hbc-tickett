import Image from "next/image";
import Link from 'next/link';

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
        position: 'relative', // Ajout de position relative pour contenir l'image de Yeti
        width: '380px',
      }}>
        <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', zIndex: '1' }}>
          <Image src="/closeyeti.png" alt="Close Yeti" width={120} height={120} />
        </div>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#000000', fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif', fontWeight: '600', lineHeight: '1.1', letterSpacing: '0em', zIndex: '2' }}>Connectez-vous</h1>
        <form style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" placeholder="Nom d'utilisateur" style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000' }} />
          <input type="email" placeholder="Adresse e-mail" style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000' }} />
          <input type="password" placeholder="Mot de passe" style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #999', color: '#000000' }} />
          <div style={{ position: 'absolute', top: '120px', right: '05%', transform: 'translateX(50%)', zIndex: '1' }}>
            <Image src="/openeye.png" alt="Open Eye" width={40} height={40} />
          </div>
          <div style={{ position: 'absolute', top: '117px', right: '05%', transform: 'translateX(50%)', zIndex: '1' }}>
            <Image src="/closedeye.png" alt="C" width={40} height={40} />
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#117bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer', zIndex: '2' }}>Se connecter</button>
        </form>
        <Link href="/forgot">
  <div style={{ color: '#117bff', textDecoration: 'underline', marginTop: '10px', textAlign: 'center', display: 'block' }}>Mot de passe oublié?</div>
</Link>
      </div>
     

    </main>
  );
}

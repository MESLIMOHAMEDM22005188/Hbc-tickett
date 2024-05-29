'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMode, setLoginMode] = useState<'username' | 'email'>('username');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    // Logique de connexion ici
    // Vérification des identifiants
    if ((username === 'user' || email === 'user@example.com') && password === 'password') {
      // Redirection vers la page d'accueil après une connexion réussie
      console.log('Connexion réussie');
    } else {
      // Gestion de l'échec de la connexion, par exemple afficher un message d'erreur
      console.log('Échec de la connexion');
      // Afficher un message d'erreur si le mot de passe est vide ou incorrect
      if (!password) {
        console.log('Veuillez saisir votre mot de passe');
      } else {
        console.log('Nom d\'utilisateur ou mot de passe incorrect');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Boutons de connexion et d'inscription */}
      <header className="flex justify-end items-center p-4 bg-gray-800 text-white">
        <Link href="/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4">
            Retour
          </button>
        </Link>
      </header>

      {/* Contenu principal */}
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
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
          width: '400px',
        }}>
          <h1 style={{
            textAlign: 'center',
            marginBottom: '20px',
            color: '#000000',
            fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '0em',
            zIndex: 2,
            fontSize: '2em'  // Agrandir le texte "Connectez-vous"
          }}>Connectez-vous</h1>
          <form onSubmit={login} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {loginMode === 'username' && (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nom d'utilisateur"
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  border: '1px solid #999',
                  color: '#000000',
                  width: '100%'  // Uniformiser la largeur des zones de saisie
                }}
              />
            )}
            {loginMode === 'email' && (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresse e-mail"
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  border: '1px solid #999',
                  color: '#000000',
                  width: '100%'  // Uniformiser la largeur des zones de saisie
                }}
              />
            )}
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Mot de passe"
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  border: '1px solid #999',
                  color: '#000000',
                  width: '100%'  // Uniformiser la largeur des zones de saisie
                }}
              />
              <div style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                <Image src={showPassword ? '/openeye.png' : '/closedeye.png'} alt="Toggle Password Visibility" width={20} height={20} />
              </div>
            </div>
            <button type="submit" style={{
              padding: '10px 20px',
              backgroundColor: '#117bff',
              color: '#fff',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              zIndex: 2,
              width: '100%'  // Uniformiser la largeur du bouton
            }}>Se connecter</button>
          </form>
          <Link href="/forgot">
            <div style={{
              color: '#117bff',
              textDecoration: 'underline',
              marginTop: '10px',
              textAlign: 'center',
              display: 'block'
            }}>Mot de passe oublié?</div>
          </Link>
        </div>
      </main>
    </div>
  );
}

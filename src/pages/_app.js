// pages/_app.js
import React from 'react';
import { UserProvider } from '../context/UserContext';
import '../styles/globals.css'; // Your global styles

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;

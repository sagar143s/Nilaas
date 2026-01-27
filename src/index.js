 import React from 'react';
 import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./assets/css/ionicons.min.css";
import "./assets/css/linea-font.css";
import './assets/scss/style.scss';
import logoFavicon from 'assets/logo/Asset 5.png';

// Ensure favicon uses the provided logo
const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
favicon.rel = 'icon';
favicon.href = logoFavicon;
if (!favicon.parentNode) {
	document.head.appendChild(favicon);
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App  />);
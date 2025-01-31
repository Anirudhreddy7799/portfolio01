import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import PostbotMain from '../postbot-main/src/App'; // Import the main component of postbot-main
import './index.css'; // Ensure this path is correct

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/postbot-main/*" element={<PostbotMain />} /> {/* Add this line */}
      </Routes>
    </Router>
  </React.StrictMode>
);

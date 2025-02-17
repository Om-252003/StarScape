// src/App.tsx
import React from 'react';
import './App.css';
import { Header } from './components/Header';  
import { PhotoCard } from './components/PhotoCard';  

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <h1>Space Photography Gallery</h1>
      
      <div className="gallery">
        <PhotoCard
          imageUrl="https://via.placeholder.com/400"
          photographer="John Doe"
          title="Galactic View"
          likes={150}
          category="Galaxy"
        />
        <PhotoCard
          imageUrl="https://via.placeholder.com/400"
          photographer="Jane Smith"
          title="Nebula Beauty"
          likes={200}
          category="Nebula"
        />
        {/* Add more PhotoCard components as needed */}
      </div>
    </div>
  );
}

export default App;

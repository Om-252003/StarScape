// src/App.tsx
import React from 'react';
import './App.css';
import { Header } from './components/Header';  // Import Header
import { PhotoCard } from './components/PhotoCard';  // Import PhotoCard
import { StarField } from './components/StarField'; // Import StarField

function App() {
  return (
    <div className="App">
      {/* Include StarField component to add starry background */}
      <StarField />

      {/* Include Header component */}
      <Header />
      
      <h1>Space Photography Gallery</h1>
      
      <div className="gallery">
        <PhotoCard
          imageUrl="https://images.unsplash.com/photo-1536108978996-128e3e2a9783?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          photographer="John Doe"
          title="Galactic View"
          likes={150}
          category="Galaxy"
        />
        <PhotoCard
          imageUrl="https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

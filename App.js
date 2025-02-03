// src/App.js
import React, { useState } from 'react';
import './App.css';

const initialProducts = [
  {
    id: 1,
    title: "React Course",
    description: "Learn React from scratch.",
    votes: 0,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "JavaScript Basics",
    description: "Understand the fundamentals of JavaScript.",
    votes: 0,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "CSS Mastery",
    description: "Master CSS for responsive design.",
    votes: 0,
    imageUrl: "https://via.placeholder.com/150",
  },
];

function App() {
  const [productList, setProductList] = useState(initialProducts);

  const handleVote = (id) => {
    const updatedProducts = productList.map((product) => {
      if (product.id === id) {
        return { ...product, votes: product.votes + 1 };
      }
      return product;
    }).sort((a, b) => b.votes - a.votes);

    setProductList(updatedProducts);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vote for Your Favorite Product!</h1>
      </header>
      <main>
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <button onClick={() => handleVote(product.id)}>Vote</button>
              <p>Votes: {product.votes}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;

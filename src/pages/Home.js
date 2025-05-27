import React from 'react';
import '../styles/Home.css';
import PostsSection from '../components/PostsSection';

export default function Home() {
  const scrollToPosts = () => {
    const section = document.getElementById('posts-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hero-section">
        <h1 className="hero-title">AutoLink</h1>
        <button className="scroll-button" onClick={scrollToPosts}>
          ↓
        </button>
      </div>
      <div id="posts-section">
        <PostsSection />
      </div>
    </>
  );
}

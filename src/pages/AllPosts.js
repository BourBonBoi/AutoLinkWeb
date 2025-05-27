import React from 'react';
import '../styles/Home.css';
import PostsSection from '../components/PostsSection';

export default function AllPosts() {
  return (
    <div id="posts-section">
      {/* Передаем showAll=true, чтобы показать все посты */}
      <PostsSection showAll={true} />
    </div>
  );
}

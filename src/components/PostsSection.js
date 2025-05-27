import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom' 
import axios from 'axios';
import '../styles/PostSection.css';
import { API_BASE_URL } from '../config';

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400?text=тут+нет+картинки';

export default function PostsSection({ showAll = false }) {  // <- новый пропс
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/updates/`)
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке постов', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Загрузка...</p>;

  // Создаём копию массива posts и разворачиваем её в обратном порядке
  const reversedPosts = [...posts].reverse();

  // Показываем все посты в обратном порядке
  const displayedPosts = showAll ? reversedPosts : reversedPosts.slice(0, 4);

  return (
    <section className="posts-list-wrapper">
      <h2>Последние посты</h2>
      {posts.length === 0 && <p>Посты не найдены</p>}

      <div className="posts-list">
        {displayedPosts.map(post => (
          <div className="post-item" key={post.id}>
            <div className="post-image-wrapper">
              <img
                src={post.image ? `http://127.0.0.1:8000${post.image}` : PLACEHOLDER_IMAGE}
                alt={post.title}
                className="post-image"
              />
            </div>
            <div className="post-text">
              <h3>{post.title}</h3>
              <h4>{post.subtitle}</h4>
              <p className="post-date"><em>{post.date}</em></p>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Показываем кнопку только если не все посты и постов больше 4 */}
      {!showAll && posts.length > 4 && (
        <div className="show-all-wrapper">
          <button className="show-all-btn" onClick={() => navigate('/allPosts')}>
            Посмотреть все
          </button>
        </div>
      )}
    </section>
  );
}
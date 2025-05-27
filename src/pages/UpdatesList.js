import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UpdatesList.css';
import { API_BASE_URL } from '../config';

export default function UpdatesList() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/posts/`)
      .then(res => {
        console.log('Response data:', res.data);
        setUpdates(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка при загрузке обновлений:', err);
        setLoading(false);
      });
  }, []);


  if (loading) return <p className="loading">Загрузка обновлений...</p>;

  return (
    <section className="updates-container">
      <h2 className="updates-title">Обновления</h2>
      {updates.length === 0 ? (
        <p className="no-updates">Пока нет обновлений</p>
      ) : (
        updates.map(update => (
          <article key={update.id} className="update-card">
            <h3 className="update-title">{update.title}</h3>
            <time className="update-date" dateTime={update.date}>
              {new Date(update.date).toLocaleString()}
            </time>
            <p className="update-content">{update.content}</p>
          </article>
        ))
      )}
    </section>
  );
}

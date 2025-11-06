// src/pages/Entities.tsx
import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import type { Post } from '../types/jsonplaceholder'; // ¡Usar 'import type'!
import PostCard from '../components/PostCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

export default function Entities() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <Container className="py-5">
      <h1 className="display-4 fw-bold text-center mb-5 text-primary">
        Últimas Publicaciones
      </h1>
      
      {loading ? (
        <div className="text-center" style={{ minHeight: '50vh' }}>
          <Spinner animation="border" variant="primary" style={{ width: '4rem', height: '4rem' }} />
          <p className="mt-3 fs-4 text-body-secondary">Cargando publicaciones...</p>
        </div>
      ) : (
        // Usamos la grilla de Bootstrap
        <Row xs={1} sm={2} lg={3} className="g-4">
          {posts.map((post) => (
            <Col key={post.id}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
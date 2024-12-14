import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

interface LoadingResponse {
  status: string;
}

const LoadingComponent: React.FC = () => {
  const [data, loading, error] = useJsonFetch<LoadingResponse>('http://localhost:7070/loading');

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return <div>Данные: {JSON.stringify(data)}</div>;
};

export default LoadingComponent;

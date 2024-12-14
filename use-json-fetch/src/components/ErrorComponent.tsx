import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

interface ErrorResponse {
  status: string;
}

const ErrorComponent: React.FC = () => {
  const [data, loading, error] = useJsonFetch<ErrorResponse>('http://localhost:7070/error');

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return <div>Данные: {JSON.stringify(data)}</div>;
};

export default ErrorComponent;

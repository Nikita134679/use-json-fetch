import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

interface DataResponse {
  status: string;
}

const DataComponent: React.FC = () => {
  const [data, loading, error] = useJsonFetch<DataResponse>('http://localhost:7070/data');

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return <div>Данные: {JSON.stringify(data)}</div>;
};

export default DataComponent;

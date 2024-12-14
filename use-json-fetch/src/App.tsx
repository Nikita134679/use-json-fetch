import React from 'react';
import DataComponent from './components/DataComponent';
import ErrorComponent from './components/ErrorComponent';
import LoadingComponent from './components/LoadingComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>Кастомным hook:</h1>
      <h2>1. Успешный запрос:</h2>
      <DataComponent />
      <h2>2. Ошибка при запросе:</h2>
      <ErrorComponent />
      <h2>3. Загрузка данных:</h2>
      <LoadingComponent />
    </div>
  );
}

export default App;

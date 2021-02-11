import React from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

const App = () => {
  const apiBaseUrl: string = 'http://localhost:8080';
  return (
    <div>
      <LinkForm />
      <LinkList apiBaseUrl={apiBaseUrl} />
    </div>
  );
};

export default App;

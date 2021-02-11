import React, { useState } from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

export interface Link {
  _id: string;
  url: string;
}

const App: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const apiBaseUrl: string = 'http://localhost:8080';

  return (
    <div>
      <LinkForm apiBaseUrl={apiBaseUrl} />
      <LinkList apiBaseUrl={apiBaseUrl} links={links} setLinks={setLinks} />
    </div>
  );
};

export default App;

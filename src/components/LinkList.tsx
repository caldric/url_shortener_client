import React, { useState } from 'react';

interface Link {
  id: string;
  url: string;
}

const LinkList = () => {
  const [links, setLinks] = useState<Link[]>([]);

  return <div>LinkList</div>;
};

export default LinkList;

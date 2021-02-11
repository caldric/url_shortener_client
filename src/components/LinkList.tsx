import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Link {
  _id: string;
  url: string;
}

const LinkList = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const baseUrl: string = 'http://localhost:8080';

  useEffect(() => {
    const getLinks = async (): Promise<void> => {
      const { data } = await axios.get(baseUrl);
      setLinks(data);
    };

    getLinks();
  }, []);

  return (
    <div>
      <ul>
        {links.map((link) => {
          const shortenedUrl = `${baseUrl}/${link._id}`;
          return (
            <li key={link._id}>
              <div>
                <span>{link.url}</span> -{' '}
                <span>
                  <a href={shortenedUrl}>{shortenedUrl}</a>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinkList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Link {
  _id: string;
  url: string;
}

interface Props {
  apiBaseUrl: string;
}

const LinkList: React.FC<Props> = ({ apiBaseUrl }) => {
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const getLinks = async (): Promise<void> => {
      const { data } = await axios.get(apiBaseUrl);
      setLinks(data);
    };

    getLinks();
  }, []);

  return (
    <div>
      <ul>
        {links.map((link) => {
          const shortenedUrl = `${apiBaseUrl}/${link._id}`;
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

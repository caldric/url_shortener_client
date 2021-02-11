import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from '../App';

interface Props {
  apiBaseUrl: string;
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
}

const LinkList: React.FC<Props> = ({ apiBaseUrl, links, setLinks }) => {
  useEffect(() => {
    const getLinks = async (): Promise<void> => {
      const { data } = await axios.get(apiBaseUrl);
      setLinks(data);
    };

    getLinks();
  }, [apiBaseUrl]);

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

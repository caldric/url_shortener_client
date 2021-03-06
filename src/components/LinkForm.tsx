import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '../App';

interface Props {
  apiBaseUrl: string;
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
}

const LinkForm: React.FC<Props> = ({ apiBaseUrl, links, setLinks }) => {
  const [linkText, setLinkText] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent refresh
    event.preventDefault();

    // Create new link
    const { data: newLink } = await axios.post(apiBaseUrl, { url: linkText });
    setLinks([...links, newLink]);

    // Clear text input box
    setLinkText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="link"
        name="link"
        placeholder="Shorten your link"
        value={linkText}
        onChange={(event) => setLinkText(event.target.value)}
        autoComplete="off"
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default LinkForm;

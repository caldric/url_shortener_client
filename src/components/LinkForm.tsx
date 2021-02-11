import React, { useState } from 'react';

const LinkForm = () => {
  const [link, setLink] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent refresh
    event.preventDefault();
    console.log('Submitted with value: ', link);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="link"
        name="link"
        placeholder="Shorten your link"
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default LinkForm;

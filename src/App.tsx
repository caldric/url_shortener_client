import React, { useState } from 'react';

const App = () => {
  const [link, setLink] = useState<string>('');

  return (
    <form>
      <input
        type="text"
        id="link"
        name="link"
        placeholder="Shorten your link"
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <button type="button">Shorten</button>
    </form>
  );
};

export default App;

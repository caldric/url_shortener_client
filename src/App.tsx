import React from 'react';

const App = () => {
  return (
    <form>
      <input
        type="text"
        id="link"
        name="link"
        placeholder="Shorten your link"
      />
      <button type="button">Shorten</button>
    </form>
  );
};

export default App;

/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';

// Major component imports
import ItemOverview from './ItemOverview/ItemOverview.jsx';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <ItemOverview />
  );
}

// render the root element with the provided component
root.render(<App />);

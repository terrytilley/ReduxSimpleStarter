import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyBuPKCF3E1jAuqYf9CzSpBXgYbZpfSpToY';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

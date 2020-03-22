import React from 'react';

import search from 'youtube-search';

interface Props {}

const opts = {
  maxResults: 10,
  key: 'AIzaSyCUV-L_Hku4Y-tUSWpybhavgNWbb_aGS6M',
};
const SearchBar = (props: Props) => {
  search('surf', opts, (err, results) => {
    if (err) return console.log(err);

    console.log(results);
  });

  return <div>SearchBar</div>;
};

export default SearchBar;

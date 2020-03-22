import React, { useState } from 'react';

import search from 'youtube-search';

interface Props {}

const opts = {
  maxResults: 10,
  key: 'AIzaSyCUV-L_Hku4Y-tUSWpybhavgNWbb_aGS6M',
};

const SearchBar = (props: Props) => {
  const initialState = { term: '' };
  const [searchTerm, setSearchTerm] = useState(initialState);
  const { term } = searchTerm;
  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    //setSearchTerm은  state[name] = value와 같음
    //객체가 복사되면서 e.target.value의 value가 searchTerm.term이 됨
    //[name]: value  =>e.target.name과 같은 요소에 value를 할당해라.
    //인풋의 name에 해당하는 요소에 스테이트로서 벨류값을 할당함
    setSearchTerm({ ...searchTerm, [name]: value });
    console.log(searchTerm);
    // // search('searchTerm', opts, (err, results) => {
    // //   if (err) return console.log(err);

    // //   console.log(results);
    // });
  };

  return (
    <div>
      SearchBar
      <input name={'term'} onChange={term => onInputHandler(term)} value={term} />
    </div>
  );
};

export default SearchBar;

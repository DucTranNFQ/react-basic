import React, { useState } from 'react'
import { Input, Anchor  } from 'antd'
import fetchAPI from '../../utils/fetchAPI';

const {Search} = Input;
const {Link} = Anchor;

export default function Dashboard() {
  const [searchData, setSearchdata] = useState([]);

  const searchURL = "https://hn.algolia.com/api/v1/search?query=";

  const onSearch = (query) => {
    const response = fetchAPI.getAll(searchURL+query);
    response.then(res => res.json()).then(data => {
      const {hits} = data;
      setSearchdata(hits)
    })
  }

  return (
    <>  
      <Search placeholder="input search text" onSearch={onSearch} enterButton style={{ width: 304 }} />

      {
        searchData &&
        <Anchor>
          {searchData.map(item => (
            <Link href={item.url} title={item.title} target="_blank" key={item.objectID} />
          ))}
        </Anchor>
      }
    </>
  )
}

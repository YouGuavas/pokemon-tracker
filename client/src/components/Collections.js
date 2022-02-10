import React, {useEffect, useState} from 'react';

import '../styles/Collections.scss';

export default function Collections(props) {
  const collections = props.collections;
  function handleChange(event) {
    const target = JSON.parse(event.target.value);
    const collectionId = target.id;
    const collectionName = target.name;
    props.handleChange(collectionId, collectionName);
  }

  useEffect(async function() {
    const collection = await collections;
    props.handleChange(collection[0].id, collection[0].name);
  }, [collections.length])
  
  return (
    <div>

      <select onChange={handleChange}>
        {collections.map((item, index) => (
        <option key={index} value={JSON.stringify(item)}>
          {item.name}
        </option>
        ))}
      </select>

    </div>
  )
}
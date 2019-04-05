import React from 'react';
import Flat from './flat';

const FlatList = ({ flatList, selectFunction }) => {
  return (
    <div className="flat-list">
      {flatList.map(eachFlat => <Flat flat={eachFlat} selectFlat={selectFunction} key={eachFlat.name} />)}
    </div>
  );
};

export default FlatList;

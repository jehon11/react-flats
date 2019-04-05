import React from 'react';
import Flat from './flat';

const FlatList = ({ flatList, selectFunction, selectedFlat }) => {
  return (
    <div className="flat-list">
      {flatList.map(eachFlat => <Flat flat={eachFlat} selectFlat={selectFunction} selectedFlat={selectedFlat} key={eachFlat.name} />)}
    </div>
  );
};

export default FlatList;

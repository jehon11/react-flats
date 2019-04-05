import React from 'react';
import Flat from './flat';

const FlatList = ({ flatList }) => {
  return (
    <div className="flat-list">
      {flatList.map(eachFlat => <Flat flat={eachFlat} />)}
    </div>
  );
};

export default FlatList;

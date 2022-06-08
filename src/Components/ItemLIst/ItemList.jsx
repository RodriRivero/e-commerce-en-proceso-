import React from 'react';
import Item from '../Item/Item';
import'./ItemList.css';

const ItemList = ({data = []}) => {
    return (
        data.map(drink => <Item  key={drink.id} info={drink} /> )
    );
}

export default ItemList;

import React from 'react';
import Item from '../Item/Item';
import'./ItemList.css';

const ItemList = ({data = []}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin:'15 px'}}>{
        data.map(drink => <Item  key={drink.id} info={drink} />)}
        </div>
    );
}

export default ItemList;

import React from "react";
import {useCartContext} from '../../Context/CartContex';

export const CarWidget = () =>{
    const {totalItems} = useCartContext();
    return(
        <>
            <i className="bi bi-cart-check"></i>
            <span>{totalItems() || ''}</span>
        </>
    );
}
export default CarWidget;

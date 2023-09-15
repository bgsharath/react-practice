import React from 'react';
import AccordianBodyRestro from './AccordianBodyRestro';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/cartSlice';

function CartList() {
    const {items} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    return (
        <div className='m-auto p-2'>
            <button className='bg-slate-500 p-2 rounded-lg text-yellow-100' onClick={()=>dispatch(clearCart())}>clear cart</button>
            <AccordianBodyRestro userData={items}/>
        </div>
    );
}

export default CartList;
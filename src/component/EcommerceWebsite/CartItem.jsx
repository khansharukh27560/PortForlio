import React from 'react';
import { useSelector } from 'react-redux';

export default function CartItem() {
    const cartItems = useSelector((state) => state.rootReducer.reducer.AddCardItems);

    return (
        <div>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                
                cartItems.map((item) => (
                    <div key={item.id} className='d-flex justify-content-between'>
                        <div>
                            <img src={item.image} alt="itemimage" style={{margin:'5px', width: '100px',height:'100px', borderRadius: '25px' }} />
                        </div>
                        <div style={{marginRight:'0px'}}>
                            <p><strong>Title:- </strong>{item.title}</p>
                            <div className='d-md-flex justify-content-between'>
                            <p><strong>Price:- </strong>{item.price}</p>
                            <p><strong>Quantity:- </strong>{item.quantity}</p>
                            <p><strong>Total Price:- </strong>{item.quantity * item.price}</p>
                            </div>
                            
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

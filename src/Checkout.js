import React from 'react';
import { useStateValue, usrStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct  from './CheckoutProduct';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';


function Checkout() {
    const [ { basket }] = useStateValue();

    return (
        <div className="checkout">
                <div className="checkout__left">
                <img  className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            
                           <FlipMove
                            staggerDurationBy={30}
                            duration={750}
                            delay={30}
                            >
                            { basket?.map((item, i) => (
                                <li key={item.id + i}>
                                    <CheckoutProduct   
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                                </li>
                                
                            ))}
                            </FlipMove>
                        </div>
                    )
                    }
        </div>
        { basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
        </div>
    )
}

export default Checkout

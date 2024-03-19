import React from "react"
import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productAction';
import { Link } from "react-router-dom";

export default function MainContainer() {
    const dispatch = useDispatch();
    const {products = [], isLoading} = useSelector((state) => state.productCartData || {})
    const product = {
      name: "iPhone",
      type: 'Mobile',
      price: 1000,
    }

    React.useEffect(() => {
      dispatch(fetchProducts.request())
    }, [])

    return (
        <div>
            <Link to="/cart">Goto Cart</Link>

          {
            isLoading ? (
              <div>
                Loading...
                </div>
            ): (
              <ul className='product'>
                {products.map(item => (
                  <li key={item.id} className='product-item'>
                    Name: {item.name} <br />
                    Price: {item.price} <br />
                    Category:  {item.category} <br /> <br />
                    <button onClick={() => dispatch(addToCart(item))} title="Add to cart">Add +</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))} title="Remove from cart">Remove -</button>
                  </li>
                ))}
                </ul>
            )
          }
        </div>
    )
}
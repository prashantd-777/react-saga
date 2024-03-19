import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/productAction';

export default function Header() {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.cartData || []);

      function handleChange(e) {
        dispatch(fetchProducts.request(e.target.value))
      }

    return (
        <div>
            <h4>Header Component</h4>
            <input className="input-field" type="text" placeholder="Enter product" onChange={handleChange} />

            <div>
                Cart item {result?.length || 0}
            </div>
        </div>
    )
}
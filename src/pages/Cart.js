import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function Cart() {
    const cartData = useSelector((state) => state.cartData);
    const amount = cartData.map(item => item.price).reduce((acc, curr) => acc + curr, 0);
    return (
        <div>
            <Link to="/">Goto Product details</Link>
            <h4>Cart Details</h4>
            <div className="cart-container">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                ID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.map((item, i) => (
                        <tr key={i}>
                            <td>
                                {item?.name}
                            </td>
                            <td>
                                {item?.price}
                            </td>
                            <td>
                                {item?.category}
                            </td>
                            <td>
                                {item?.id}
                            </td>
                        </tr>
                        ))}
                      
                    </tbody>
                    
                </table>

                <div className="cart-summary">
                    <label>Amount -: {amount}</label>
                    <label>Discount -: {amount/10}</label>     
                    <label>Total -: {amount - amount/10}</label>
                </div>
            </div>
        </div>
    )
}
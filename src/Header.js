import { useSelector } from "react-redux";

export default function Header() {
    const result = useSelector((state) => state.cartData || []);

    return (
        <div>
            <h4>Header Component</h4>

            <div>
                Cart item {result?.length || 0}
            </div>
        </div>
    )
}
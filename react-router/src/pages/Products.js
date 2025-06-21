import { Link } from "react-router-dom"

const PRODUCTS = [
    { id: 1, title: "Product-1" },
    { id: 2, title: "Product-2" },
    { id: 3, title: "Product-3" }
]

function Products() {

    return <>
        <h1>Products Page</h1>
        <ul>
            {PRODUCTS.map((e) => <li><Link to={e.id}>{e.title}</Link></li>)}
        </ul>
    </>
}


export default Products 

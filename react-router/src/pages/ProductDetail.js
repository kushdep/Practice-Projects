import { Link, useParams } from "react-router-dom"

function ProductDetail(){
    const params = useParams()

    return<>
    <p>{params.pId}</p>
    <p><Link to=".." relative="path ">Back</Link></p>
    </>
}

export default ProductDetail
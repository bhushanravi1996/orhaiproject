import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"

function RestaurantTable({data}){
    const [product,setProduct] = useState([])
    const getdata = () => {
        axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants")
        .then((res) =>{
            setProduct(res.data)

        })
        useEffect(() =>{
            getdata()
        },[])
    }
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {product.map((prod) => {
                        <RestaurantCard key={prod.id} data={prod}/>

                    })}
                </tbody>
            </table>
    )
}

export default RestaurantTable
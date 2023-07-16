// import "./Style/Product.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Singledata() {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [Lodeing, SetLoding] = useState(false)
    const [count, setCount] = useState(1)


    const getdata = () => {
        SetLoding(true)
        axios(`https://the-pretty-petals-backend.onrender.com/products/${id}`)
            .then((data) => {
                console.log(data.data)
                setData(data.data)
                //  getdata(data)
            })
            .finally(() => SetLoding(false))

    }

    useEffect(() => {
        getdata()
    }, [])


    return Lodeing ? (<h1>Loading.....</h1>) :

        (<div className="data-div-img">
            <div className="bi">
                <h1>Total Price : $ {data.priceKey * count}</h1>
                {

                    <div className="data" key={data.id}>
                        <img src={data.image} alt="" />
                        <div> <h3> Price:{data.price}</h3></div>
                        <p>{data.name}</p>
                        <div className="quan"><button disabled={count == 1} onClick={() => setCount(count - 1)}>-</button> <h3>Quantity :{count}</h3> <button onClick={() => setCount(count + 1)}>+</button></div>
                    </div>


                }
                 <button>Pay now</button>
            </div>
        </div>)

}
export default Singledata
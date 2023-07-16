
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Data() {
    const [Lodeing, SetLoding] = useState(false)
    const [data, setData] = useState([])

    const sortInc = () => {
        let sortedDataIncrisingOrder = data.sort((a, b) => a.priceKey-b.priceKey);
        // console.log(sortedDataIncrisingOrder);
        setData(sortedDataIncrisingOrder)
       
    }

    const sortDesc = () => {
        let sortedDataDescOrder = data.sort((a, b) => b.priceKey-a.priceKey);
        // console.log(sortedDataDescOrder);
        setData(sortedDataDescOrder)
    }

    const getdata = () => {
        SetLoding(true)
        axios(`https://the-pretty-petals-backend.onrender.com/products`)
            .then((data) => {
                // console.log(data.data)
                setData(data.data)
                //  getdata(data)
            })
            .finally(() => 
            SetLoding(false))
    }

    console.log(data)


    useEffect(() => {
        getdata()

    }, [])


    return Lodeing ? (<h1>Loading....</h1>) : (
        <div>
            <button onClick={sortInc}>LowToHign</button>
             <button onClick={sortDesc}>HighToLow</button>

            <div className="data-div">

                {
                    data?.map((e) => (
                        <div className="data" key={e.id}>
                            <img src={e.image} alt="" />
                            <div> <h3>Price:{e.price}</h3></div>
                            <p>{e.name}</p>
                            <Link to={`/single/${e.id}`}><button>Buy Now</button></Link>
                        </div>

                    ))
                }

            </div>
        </div>
    )
}
export default Data
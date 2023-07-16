import "./Style/Product.css"
import { useState, useEffect,useContext} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import { authContext } from "../../Usecontext/AuthContext"

function Product() {
     const {isauth} = useContext(authContext)

    const [data, setData] = useState([])
    const [Lodeing,SetLoding] = useState(false)

    const getdata = () => {
        SetLoding(true)
        axios(`https://the-pretty-petals-backend.onrender.com/products`)
            .then((data) => {
                console.log(data.data)
                setData(data.data)
                //  getdata(data)
            })
        .finally(()=>  SetLoding(false))
    }

    useEffect(() => {
        getdata()
    }, [])


    return Lodeing ? (<h1>Loading....</h1>) : (
        
        <div className="data-div">

            {
                data.map((e) => (
                    <div className="data" key={e.id}> 
                    <img src={e.image} alt="" />
                    <div> <h3>Price:{e.price}</h3></div>
                     <p>{e.name}</p>  
                    </div>

                ))
            }

        </div>
    )
}
export default Product
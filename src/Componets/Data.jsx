import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Style/Navbar.css";

function Data() {

    const [loading, SetLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of items to display per page
    const [searchQuery, setSearchQuery] = useState("");
    
   

    const sortInc = () => {
        // ... your existing sortInc logic ...
        SetLoading(true)
        axios(`https://the-pretty-petals-backend.onrender.com/products`)
            .then((data) => {
                // let sortedDataDescOrder = data.data.sort((a,b) => b.priceKey-a.priceKey);
                let sortedDataIncrisingOrder = data.data.sort((a, b) => a.priceKey - b.priceKey);
                // console.log(sortedDataDescOrder);

                setData(sortedDataIncrisingOrder)
                // setData(data.data)
                //  getdata(data)
            })
            .finally(() =>
                SetLoading(false))
    }

    const sortDesc = () => {
        // ... your existing sortDesc logic ...
        SetLoading(true)
        axios(`https://the-pretty-petals-backend.onrender.com/products`)
            .then((data) => {
                let sortedDataDescOrder = data.data.sort((a, b) => b.priceKey - a.priceKey);
                // console.log(sortedDataDescOrder);

                setData(sortedDataDescOrder)
                // setData(data.data)
                //  getdata(data)
            })
            .finally(() =>
                SetLoading(false))
    }

    const getdata = () => {
        // ... your existing getdata logic ...
        // SetLoading(true)
        let API = searchQuery==''?'https://the-pretty-petals-backend.onrender.com/products?':`https://the-pretty-petals-backend.onrender.com/products?color=${searchQuery}`
        axios(API)
            .then((data) => {
                // console.log(data.data)
                setData(data.data)
                //  getdata(data)
            })
            .finally(() =>
                SetLoading(false))
    }

    useEffect(() => {
        getdata();
    }, [searchQuery]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return loading ? (

        <h1>Loading....</h1>
    ) : (
        <div>
            <div className="btn-div">
                <button className="btn-fillter" onClick={sortInc}>
                    LowToHigh
                </button>
                <button className="btn-fillter" onClick={sortDesc}>
                    HighToLow
                </button>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by Color"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="data-div">
                {currentItems.map((e) => (
                    <div className="data" key={e.id}>
                        <img src={e.image} alt="" />
                        <div>
                            <h3>Price: {e.price}</h3>
                        </div>
                        <p>{e.name}</p>
                        <Link to={`/single/${e.id}`}>
                            <button>Buy Now</button>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="page-main" >
                {data.length > itemsPerPage && (
                    <div className="pagination-div">
                        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
                            (item, index) => (
                                <div key={index}>
                                    <button className="pagination" onClick={() => paginate(index + 1)}>{index + 1}</button>
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>

        </div>
    );
}

export default Data;

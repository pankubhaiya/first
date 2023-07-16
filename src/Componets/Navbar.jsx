import "../Style/Navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Usecontext/AuthContext";
function Navbar() {
    const navigate = useNavigate()
  const {isauth,name,logoutTo} = useContext(authContext)
  console.log(isauth)
    return (

        <div className="nav-div">
            <div>
                <Link to="/"><span className="jain">Flowers</span><span className="mart">Mart</span></Link>
            </div>
            <div >
                <div>{ isauth ? <div className="min-div"> <div onClick={()=>{navigate("/data")}}>Product</div>  <div>{name}</div> <div onClick={()=>{logoutTo()}}>Logout</div></div> : <div  className="min-div"><div onClick={()=>{navigate("/login")}}>Login</div> <div onClick={()=>{navigate("/sign")}} >sign-Up</div></div>  }</div>
            </div>
        </div>
    )
}

export default Navbar;
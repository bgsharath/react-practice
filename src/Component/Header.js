import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userLoginContect";
import { useSelector } from "react-redux";

const Header = () => {
    const {loggedInUser,setUserName} = useContext(userContext)
    const {items} = useSelector((state)=>state.cart)
    return (
        <div className="headerContainer m-2">
            <div>
                <img className="logo" alt="logo" src="https://www.freeiconspng.com/uploads/logo-design-blank-circle-blue-and-orange-png-2.png" />
            </div>
            <div>
                <ul className="nav">
                    <li><input type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/hoc">Hoc</Link></li>
                    <li><Link to="/cart">Cart ({items.length})</Link></li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
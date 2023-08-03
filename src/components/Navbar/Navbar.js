import React from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <div className="navbar_container">
            <div className="navbar">
                <div className="navbar_left">
                    <div className="navbar_left_logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpdSFWgGQAa3SRDkmtoHQ5Qcgh6PjaK6gbg&usqp=CAU" />
                        <p>Mokaro</p>
                    </div>

                    <div className="navbar_left_items">
                        <p onClick={() => navigate("/generate-invoice")}>Generate Invoice</p>
                        <p>Generate PDF</p>
                        <p>Generate Email</p>
                        <p>Invoice Status Table</p>
                        <p>Template Selection</p>
                    </div>
    
                </div>

                <div className="navbar_right">
                    {
                        isAuthenticated && <p>{user.name}</p>
                    }
                    {
                        isAuthenticated ? (
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                        ) : (
                            <button onClick={() => loginWithRedirect()}>Log In</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
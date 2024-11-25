import React from "react";
import { FaSearch } from 'react-icons/fa';  // FontAwesome icon
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import '../styles.css'

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark" style={{ backgroundColor: "black" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Zensar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ marginLeft: '550px' }}>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <ul className="dropdown-menu ">
                                <li><Link className="dropdown-item" >Action</Link></li>
                                <li><Link className="dropdown-item" >Another action</Link></li>
                                <li><Link className="dropdown-divider" />aaaaa</li>
                                <li><Link className="dropdown-item" >Something else here</Link></li>
                            </ul>
                        </li>



                        {/* --------------------------------------------------------------------------------------------------- */}
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                        </li> */}



                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                            </Link>
                            <ul className="dropdown-menu ">
                                <li><Link className="dropdown-item" >Hi-tech Engineering</Link></li>
                                <li><Link className="dropdown-item" >Banking and Financial Services </Link></li>
                                <li><Link className="dropdown-item" >Insurance</Link></li>
                                <li><Link className="dropdown-item" >Healthcare and Life Sciences </Link></li>
                                <li><Link className="dropdown-item" >Telecom </Link></li>
                                <li><Link className="dropdown-item" >Consumer Services </Link></li>
                                <li><Link className="dropdown-item" > Manufacturing </Link></li>


                            </ul>
                        </li>

                        {/* ------------------------------------------------------------------------------------------------- */}


                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Insight
                            </Link>
                            <div className="dropdown-menu row">
                                <div className="col-md-6">
                                    <h6 className="dropdown-header">Category 1</h6>
                                    <Link className="dropdown-item" to="#">A</Link>
                                    <Link className="dropdown-item" to="#">B</Link>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="dropdown-header">Category 2</h6>
                                    <Link className="dropdown-item" to="#">C</Link>
                                    <Link className="dropdown-item" to="#">D</Link>
                                </div>
                            </div>
                        </li>

                        {/* ------------------------------------------------------------------------------------------------------------------------ */}

                        {/* ------------------------------------------------------------------ */}


                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Zensar
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" >Action</Link></li>
                                <li><Link className="dropdown-item" >Another action</Link></li>
                                <li><Link className="dropdown-divider" />aaaaa</li>
                                <li><Link className="dropdown-item" >Something else here</Link></li>
                            </ul>
                        </li>

                        {/* ------------------------------------------------------------------- */}

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Contact
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" >Action</Link></li>
                                <li><Link className="dropdown-item" >Another action</Link></li>
                                <li><Link className="dropdown-divider" />aaaaa</li>
                                <li><Link className="dropdown-item" >Something else here</Link></li>
                            </ul>
                        </li>



                    </ul>
                    <div className="ms-auto">  {/* ms-auto moves the icon to the right */}
                        <button className="btn btn-">  {/* Button for search icon */}
                            <FaSearch />  {/* FontAwesome Search Icon */}
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar

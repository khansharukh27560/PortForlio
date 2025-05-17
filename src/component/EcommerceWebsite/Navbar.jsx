import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import Popup from 'reactjs-popup'
import './navbar.css'
export default function Navbar() {
    const [showLenth,setShowLenth] = useState([])
    const [showCartItems,setShowCartItems] = useState(false)
    const [showCartIcon,setShowCartIcon] = useState(true)
    const result =  useSelector((state)=>[state.rootReducer.reducer.AddCardItems])
    const flat = result.flat(Infinity)
    console.log(flat);
    const forReduce = flat.map((item)=>
    item.quantity)
     const forAdd = forReduce.reduce((a,b)=>a+b,0)
     
     useEffect(()=>{
       setShowLenth(forAdd)
     console.log('tOTAL:-',forAdd)
    },[forAdd])
    
    const handleShow = ()=>{
        setShowCartItems(true)
        setShowCartIcon(false)
    }
    const handleHide = ()=>{
        setShowCartItems(false)
        setShowCartIcon(true)
    }   
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                       <div className="d-flex cart-icon-button" role="search">
  {showCartIcon && (
    <Popup
  trigger={
    <button className="btn btn-outline-success" type="button" onClick={handleShow}>
      <i className="bi bi-cart4" style={{ fontSize: '2.5rem' }}></i>
      <small className="cart-badge">{showLenth}</small>
    </button>
  }
  modal
  closeOnDocumentClick
>
  {(close) => (
    <div className="cart-popup-container">
      <div className="cart-popup">
        <h5>Cart Items</h5>
        {showLenth === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <CartItem />
        )}
        <button className="btn btn-sm btn-danger mt-2" onClick={close}>
          Close
        </button>
      </div>
    </div>
  )}
</Popup>

  )}
</div>


                    </div>
                </div>
            </nav>
        </div>
    )
}

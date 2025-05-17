import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { useDispatch } from "react-redux"
import { AddCardItem } from "../Redux/Action/action"

export default function Ecommerce() {
    const [searchInput, setSearchInput] = useState([])
    const [apiData, setApiData] = useState([])
    const [error, setError] = useState(true)
    const [filterData, setFilterData] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchFakeData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                if (data) {
                    setApiData(data)
                    setFilterData(data)
                }
            } catch (err) {
                setError(err)
            }
        }
        fetchFakeData()
    }, [])
    useEffect(() => {
        let timer = setTimeout(() => {
            let filterData = apiData.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))
            setFilterData(filterData)
        }, 500)
        return () => clearTimeout(timer)
    }, [apiData, searchInput])

    const handleIncrease = (id)=>{
        setCartCount(prev => ({
            ...prev,
            [id] : (prev[id] || 0) + 1
        }))

    }
    const handleDecrease=(id)=>{
        setCartCount(prev => ({
            ...prev,
            [id] : (prev[id] || 0) - 1
        }))
    }
    

    return (
        <div className="" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="maindiv" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <input type="text" style={{ width: '50%', border: '1px solid black', borderRadius: '5px' }}
                    placeholder="Search here with title" onChange={(e) => setSearchInput(e.target.value)} />
            </div>

            <div className="maindivWest" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', padding: '10px' }}>
                {filterData ? (filterData.map((item) => (

                    <div class="card" style={{ width: "18rem" }} key={item.id}>
                        <img src={item.image} class="card-img-top" alt={item.title} style={{ height: "200px" }} />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.description.length > 0 ? item.description.slice(0, 100) : item.description}</p>
                            <div className="d-flex justify-content-between">
                                <p class="card-text">{item.category}</p>
                                <p class="card-text">{item.price}</p>
                                <p class="card-text">{item.rating.rate} {item.rating.count}</p>
                            </div>
                            <div>
                                <p><small><i class="bi bi-caret-left-fill" onClick={()=>handleDecrease(item.id)}></i></small>{' '}{cartCount[item.id] || 0}{' '}<small><i class="bi bi-caret-right-fill" onClick={() => handleIncrease(item.id)}></i></small></p>
                                <button className="btn btn-primary" disabled={cartCount[item.id] === 0} 
                                onClick={() => {
  if (cartCount[item.id] > 0) {
    dispatch(AddCardItem({ ...item, quantity: cartCount[item.id] }));
  }else{
    alert('please add item to carts ')
  }
}}>Add to Cart</button>
                            </div>

                        </div>
                    </div>
                ))) : (<div>{error}</div>)}
            </div>
        </div>
    )
}
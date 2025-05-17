import { useEffect, useState } from "react"

export default function West() {
  const [searchInput,setSearchInput] = useState('')
  const [apiData, setApiData] = useState([])
  const [error, setError] = useState(true)
  const [filterData,setFilterData] = useState([ ])
  useEffect(()=>{
    const  fetchFakeData = async() => {
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
  },[])
 useEffect(()=>{
   const filterData = apiData.filter((item)=>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
    )
 setFilterData(filterData)
 },[])
  return (
    <div className="maindiv" style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <input type="text" style={{width:'50%',border:'1px solid black',borderRadius:'5px'}} 
      placeholder="Search here with title" onChange={(e)=>setSearchInput(e.target.value)} />
    <div className="maindivWest" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'10px',padding:'10px'}}>
      {filterData ? (filterData.map((item) => (
        
          <div class="card" style={{width:"18rem"}}>
            <img src={item.image} class="card-img-top" alt={item.title} style={{height:"200px"}}/>
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description.length>0 ?item.description.slice(0,100):item.description}</p>
              <p class="card-text">{item.category}</p>
              <p class="card-text">{item.price}</p>
              <p class="card-text">{item.rating.rate} {item.rating.count}</p>
            </div>
          </div>
      ))):(<div>{error}</div>)}
    </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import { Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid, LineChart, ResponsiveContainer } from 'recharts'

export default function WeatherData() {
  const [fetchingData, setFetchingData] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  const fetchData = async () => {
    setIsLoading(true); // Start loading
    setError(null); // Reset error
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=3'
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      setFetchingData(data)
    } catch (e) {
      console.error("Failed to fetch weather data:", e);
      setError(e.message || 'Failed to fetch data.'); // Set error state
    }
    setIsLoading(false); // Stop loading
  }



  useEffect(() => {
    fetchData()
  }, [])
  const filterData = fetchingData?.hourly?.time
    ?.map((time, index) => ({
      time: time,
      temperature: fetchingData.hourly.temperature_2m[index],
    }))
    ?.filter(item =>
      item.time.includes(input) || String(item.temperature).includes(input)
    );
  console.log('filterData:-', filterData)
  if (isLoading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading weather data...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>Error: {error}</div>;
  }
  return (
    <div className='mainTodo'>
      <h1 className='heading'>Wether Data</h1>
      <div className='d-flex justify-content-center'>
        <p style={{ border: '1px solid black', padding: '5px', margin: '5px', borderRadius: '15px' }}>Latitude:-{fetchingData.latitude}</p>
        <p style={{ border: '1px solid black', padding: '5px', margin: '5px', borderRadius: '15px' }}>Longitude:-{fetchingData.longitude}</p>

      </div>
      <div>
        <label>Filter By Time And Temperature</label>
        <input placeholder='search by time or temperature' type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      </div>
      <div className='d-flex'>
        <div>
          {Array.isArray(filterData) && filterData.length > 0 ? (
            <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', marginTop: '20px' }}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Temperature (°C)</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.time}</td>
                    <td>{item.temperature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ marginTop: '20px' }}>No data found.</p>
          )}
        </div>

        <div className='' style={{ marginTop: '20px' }}>
          {Array.isArray(filterData) && filterData.length > 0 ? (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={filterData} // Pass the filtered data array
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis label={{ value: '°C', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} name="Temperature" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p style={{ marginTop: '20px', textAlign: 'center' }}>No data to display in chart.</p> // Message if no data for chart
          )}
        </div>

      </div>


    </div>
  )
}

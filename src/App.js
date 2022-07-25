import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import NavBar from './components/Navbar';
import Room from './components/Room';
import Login from './page/Login';
import Register from './page/Register';


function App() {
  const [room, setRoom] = useState([])
  useEffect(()=>{
    async function getRoom(){
      try {
        const res = await fetch("http://127.0.0.1:3000/room",{method:"GET"})
        const data = await res.json()
        setRoom(data)
      } catch (error) {
        alert(error)
      }
    }
    getRoom()
  }, [])
  async function onSearch(startPrice,endPrice) {
    try {
      const res = await fetch(`http://127.0.0.1:3000/room/filter?startPrice=${startPrice}&endPrice=${endPrice}`, { method: "GET" })
        if (res.status === 200) {
            const data = await res.json()
            setRoom(data)
        } else {
          setRoom([])
          throw new Error('khong tim thay phong tuong ung')
        }
      } catch (error) {
        alert(error)
      }
  }
    return (
      <>
        <NavBar />
        <Filter onSearch={onSearch} />
        <Room room={room} />
        <Login />
        <Register />
      </>
    )
}

export default App;

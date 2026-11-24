import { Suspense, use, useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Items from './components/items/Items'
import Favorite from './components/favorite/Favorite'



function App() {
  const itemPromise= fetch('./gears.json').then(res=>res.json());
  const[selected, setSelected]=useState([]);
  const[count, setCount]=useState(0);

  const handleHeart=(data)=>{
  //  console.log(data.title)
   setSelected([...selected,data])
   setCount(count+data.currentBidPrice);
  }
  const handlex=(item)=>{
   const selectedFilter= selected.filter(i=>i.id!==item.id);
   setSelected(selectedFilter);
   setCount(count-item.currentBidPrice);
  }
  //console.log(selected)
  //console.log(count)
    
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>

    <div className='bg-gray-200'>
      <div className='pl-12 pt-10 pb-1'>
        <h2>Active Auctions</h2>
       <p>Discover and bid on extraordinary items</p>
      </div>
      <div className='flex md:flex-row flex-col-reverse gap-5 md:gap-0 pb-10'>
      <div className="left-sec md:w-[70%] md:pl-10  pr-5 pl-5">
       
       <Suspense fallback="Gears are loading">
        <Items itemPromise={itemPromise} handleHeart={handleHeart}></Items>
       </Suspense>
      </div>
      <div className="right-sec md:w-[30%] md:pr-10 pl-5 pr-5">
        <Favorite selected={selected} count={count} handlex={handlex}></Favorite>
      </div>
    </div>
    </div>

    <Footer></Footer>
    </>
  )
}

export default App

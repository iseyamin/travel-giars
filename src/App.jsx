import { Suspense, use, useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Items from './components/items/Items'
import Favorite from './components/favorite/Favorite'



function App() {
  const itemPromise= fetch('./gears.json').then(res=>res.json());
    
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>

    <div className='flex bg-gray-200'>
      <div className="left-sec w-[70%] pl-10 pt-10 pr-5">
       <h2>Active Auctions</h2>
       <p>Discover and bid on extraordinary items</p>
       <Suspense fallback="Gears are loading">
        <Items itemPromise={itemPromise}></Items>
       </Suspense>
      </div>
      <div className="right-sec w-[30%]">
        <Favorite></Favorite>
      </div>
    </div>

    <Footer></Footer>
    </>
  )
}

export default App

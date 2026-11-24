import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import Fitem from '../fitem/Fitem';
import Noitem from '../noitem/Noitem';

const Favorite = ({selected,count, handlex}) => {
    

    return (
        <div>
            <div className="overflow-x-auto bg-white rounded-2xl text-black">
  <table className="table">
    {/* head */}
    <thead className='text-black'>
      <tr>
       
        <th>
            <div className='flex items-center justify-center'>
                <CiHeart size={25} />
                Favorite items
            </div>
        </th>
        
      </tr>
    </thead>
    <tbody>
      {
        selected.length===0? (
            <Noitem></Noitem> ) : (
                selected.map(item=><Fitem key={item.id} item={item} handlex={handlex}></Fitem>)
            )
        //<Fitem></Fitem>
      }
     
    </tbody>
    {/* foot */}
    <tfoot className='text-black'>
      <tr>
        
        <th>
            <div className='flex justify-around'>
                <h2>Total bids Amount</h2>
                <h2>${count}</h2>
            </div>
        </th>
        
      </tr>
    </tfoot>
  </table>
</div>
        </div>
    );
};

export default Favorite;
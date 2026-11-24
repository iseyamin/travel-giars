import React from 'react';
import { CiHeart } from "react-icons/ci";
import Fitem from '../fitem/Fitem';

const Favorite = () => {
    return (
        <div>
            <div className="overflow-x-auto bg-white rounded-2xl">
  <table className="table">
    {/* head */}
    <thead>
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
        <Fitem></Fitem>
      }
     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        
        <th>
            <div className='flex justify-around'>
                <h2>Total bids Amount</h2>
                <h2>$500</h2>
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
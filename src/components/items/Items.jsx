import React, { use } from 'react';
import Item from '../item/Item';

const Items = ({itemPromise,handleHeart}) => {
    const itemss= use(itemPromise);
    console.log(itemss)
    return (
        <div>
            <div className="overflow-x-auto bg-white rounded-2xl">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>
    <tbody>
        {
            itemss.map((data)=><Item key={data.id} data={data} handleHeart={handleHeart}></Item>)
        }
      
     
    </tbody>

   
  </table>
</div>
        </div>
    );
};

export default Items;
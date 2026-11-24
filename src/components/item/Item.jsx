import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const Item = ({data,handleHeart}) => {
    const{image, title, currentBidPrice, timeLeft, id}=data;
const [isDisabled, setIsDisabled] = useState(false);

const handleClick = () => {
  handleHeart(data);
  setIsDisabled(true);
};
    return (
        <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              {/* <div className="text-sm opacity-50">United States</div> */}
            </div>
          </div>
        </td>
        <td>
          ${currentBidPrice}
        </td>
        <td>{timeLeft}</td>
        <th>
          <button 
          className="cursor-pointer disabled:cursor-not-allowed"
  onClick={handleClick}
  disabled={isDisabled}>
            
                <FaHeart size={25} className={isDisabled ? 'text-pink-800' : ''} />
            
          </button>
        </th>
      </tr>
    );
};

export default Item;
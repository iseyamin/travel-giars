import React from 'react';
import { CiHeart } from "react-icons/ci";

const Item = ({data}) => {
    const{image, title, currentBidPrice, timeLeft, id}=data;
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
          <button className="btn btn-ghost btn-xs">
            <CiHeart size={25} />
          </button>
        </th>
      </tr>
    );
};

export default Item;
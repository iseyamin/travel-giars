import React from 'react';

const Fitem = ({item}) => {
    const{image, title, currentBidPrice, timeLeft, id}=item;
    return (
        <tr>
        
        <td>
          <div className='flex justify-between'>
            <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
              <div className="font-bold">{title}</div>       
          </div>
          <div>
            <button>X</button>
          </div>
          </div>

        </td>
        
      </tr>
    );
};

export default Fitem;
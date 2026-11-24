import React from 'react';

const Fitem = () => {
    return (
        <tr>
        
        <td>
          <div className='flex justify-between'>
            <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
              <div className="font-bold">Hart Hagerty</div>       
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
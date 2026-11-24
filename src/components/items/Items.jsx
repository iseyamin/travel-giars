import React, { use } from 'react';

const Items = ({itemPromise}) => {
    const itemss= use(itemPromise);
    console.log(itemss)
    return (
        <div>
            <h1>helo</h1>
        </div>
    );
};

export default Items;
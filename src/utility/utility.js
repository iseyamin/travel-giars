//get item
const getLocal=()=>{
   const ids= localStorage.getItem('bid');
   return ids? JSON.parse(ids) : []; 
}

const addLocal=(id)=>{
    const ids= getLocal();
    ids.push(id);
    localStorage.setItem('bid', JSON.stringify(ids));
}

const removeLocal=(id)=>{
    const ids=getLocal();
    const neww=ids.filter(ids=>ids!==id);
    localStorage.setItem('bid',JSON.stringify(neww))
}




export{
    getLocal as get,
    addLocal as add,
    removeLocal as remove
}

const Grocerylist=({data,deletegrocery})=>{
    return(
      <>
        {data.map((ele) => (
        <h1 key={ele.id}>{ele.title}{" "} <button onClick={()=>{deletegrocery(ele.id)}}>delete</button></h1>
        
      ))}
      </>
    )
  }
  export {Grocerylist}
import React from "react";

const Groceryinput=({inputValue,setInputvalue,addgrocery})=>{
    
    return(
      <>
        <h1>Grocery LIST USING JSON SERVER</h1>
       <input
        placeholder="Add A New Grocery..."
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <button onClick={addgrocery}>SAVE</button>
      </>
    )
  }
  export {Groceryinput};
  
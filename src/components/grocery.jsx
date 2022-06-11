import React from "react";
import { Groceryinput } from "./groceryinput";
import { Grocerylist } from "./grocerylist";
const Grocery = () => {
  const [inputValue, setInputvalue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  const getgrocery = (page) => {
    setLoading(true);
    fetch(`http://localhost:3001/grocerylist1`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(true);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    getgrocery();
  }, []);


  const deletegrocery=(id)=>{
    setLoading(true);
    fetch(`http://localhost:3001/grocerylist1/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setError(false);
       
        return getgrocery();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const addgrocery = () => {
    // making a post requesting and saving the todo there ?
    const payload = {
      title: inputValue,
      status: false
    };
    console.log(payload);
    setLoading(true);
    fetch(`http://localhost:3001/grocerylist1`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setError(false);
       
        return getgrocery();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };



  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <div>
      <Groceryinput inputvalue={inputValue} setInputvalue={setInputvalue} addgrocery={addgrocery}/>
      <br />
     <Grocerylist data={data} deletegrocery={deletegrocery}/>
    </div>
  );
};

export { Grocery }

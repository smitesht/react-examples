
import { useState } from 'react';
import './App.css';

function App() {

  const arr = ["Apple", "Banana", "Greps", "Kiwi", "Peru", "Mango"]

  const fruitsarr = arr.map((data) => {
      return {state: false, data}
  })
  

  const [fruits, setFruits] = useState(fruitsarr)

  const OnDelete = (e, index) =>{
    e.preventDefault();
    
    const myarr = fruits.filter((ele, ind) => {
        return ind !== index
    })

    setFruits(myarr)
    console.log(myarr)
  }

  const OnCheckmark = (e, ind) =>{
      const newFruitsArr = fruits.map((item,i) => {
        if(ind === i){
          return {...item, state: e.target.checked}
        }else{
          return item;
        }
      })

      setFruits(newFruitsArr)
      console.log(newFruitsArr)
  }

  return (
    <div>
      <ul>
        
      
        {
          fruits.map((data, index) => {
            return (<li key={index}> 
                <input type='checkbox' checked={data.state} onChange={(e) => OnCheckmark(e, index)} /> 
                  {data.state}
                  {data.data} {data.state === true ? <button onClick={(e) => OnDelete(e, index)}>Delete</button> : ''  } </li>)
          })
        }

      </ul>
    </div>
  );
}

export default App;

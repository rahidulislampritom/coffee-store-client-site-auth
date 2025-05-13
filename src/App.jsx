
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {

  const coffeeData = useLoaderData();

  const [coffees, setCoffees] = useState(coffeeData);


  return (
    <div>
      <Navbar></Navbar>

      <div className='max-w-7xl mx-auto grid grid-cols-2 gap-10'>
        {
          coffees.map(coffee =>
            <CoffeeCard

              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}>

            </CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App

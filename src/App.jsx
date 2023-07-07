import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
    <h1 className='header'>Hello, world!</h1>
    <p className='paragraph1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nemo vitae magnam earum mollitia, quisquam alias perferendis veniam totam ipsam! Maxime, animi repellendus pariatur ullam consectetur blanditiis quis. Eos, molestias?</p>
    <p className='paragraph2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem minima, in nobis expedita, molestiae vel odio error hic mollitia beatae maxime fuga nihil libero maiores sequi voluptate rerum quia numquam!</p>
    <p className='p3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad eligendi maiores! Doloremque fugiat incidunt corporis possimus. Ea animi enim atque, iure ex harum est! Illum perspiciatis deserunt voluptates itaque.</p>
    </div>
    </>
  )
}

export default App

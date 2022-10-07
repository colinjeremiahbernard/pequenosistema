import React, { useState, useEffect, useCallback } from 'react'
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader/subheader'

const URL = "https://fakestoreapi.com/products?limit-10"
const getRandomItem = async() => {
  const response = await fetch(URL)
  const body = await response.json()
  return body.url
}
export default() => {
  const [aquamarineHeader, setAquamarineHeader] = useState(false)
  const [aquaSubheader, setAquaSubheader] = useState(false)

  const App = () => {
    const [url, setUrl] = useState(null)
    const fetchOnMount = useCallback(async() => {
      const url = await getRandomItem()
    })
    const onclickHandler = async() => {
        const url = await getRandomItem()
        setUrl(url)
    }
  }
  
  useEffect (() => {
    fetch('https://fakestoreapi.com/products?limit-10')
    .then(response => response.json())
    .then((data)=>console.log(data))

   // onclickHandler()
    
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setAquamarineHeader(true)
        setAquaSubheader(true)
        
      } else {
        setAquamarineHeader(false)
        setAquaSubheader(false)
      }
    }
  }, [])
  return(
    <div className='page'>
      <Header aquamarine={aquamarineHeader}/>
      <Subheader aqua={aquaSubheader}/>
    
        <div className='button'>
            <button>
              Click me for Item.
            </button>
            <span>{URL}</span>
            <img src = {URL}/>
        </div>
      
    </div>
  )
  }
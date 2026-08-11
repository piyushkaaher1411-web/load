import React from 'react'
import { useState,useEffect } from 'react'
 import { Oval } from 'react-loader-spinner'

const App = () => {
  let [load,setload]=useState(false)
  let [data,setdata]=useState("")

  useEffect(()=>{
    setload(true)
    setTimeout(()=>{
      setdata("matheshwar")
      setload(false)
    },2000);
    },[])
  return (
    <div>{
      (load==true?
      <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />:<div>{data}</div>)
      }
    </div>
  )
}

export default App

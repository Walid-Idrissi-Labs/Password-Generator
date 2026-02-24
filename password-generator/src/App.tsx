import './App.css'
import {useEffect, useState} from "react"
import {generatePassword , getSeed} from "../generate_password"

function App() {
  
  const [passwordParam , setPasswordParam] = useState<string>("dash")
  const [password, setPassword] = useState<string>(() => generatePassword(passwordParam))
  const [textorpassword , setTextorpassword] = useState<string>("password")

  const generateNewPassword = () => {
    setPassword(generatePassword(passwordParam))
  }

  useEffect(() => {
    setPassword(generatePassword(passwordParam))
  }, [passwordParam])


  const handleCopy = async() => {
    try {
      await navigator.clipboard.writeText(password)
    }
    catch (e) {console.error("copy failed" , e)}
  }





  return (
    <>
    <div className='flex flex-col items-center justify-center gap-4 outline outline-indigo-400 '>
      <h1 className='text-center text-5xl mb-7'>Password Generator</h1>
      <div className='text-center flex items-center gap-2'>
        <input className='text-center text-xl w-[30vw]'  type={textorpassword} value={password} readOnly  ></input>
        <button onClick={()=> setTextorpassword( prev => prev==="password"?"text":"password"  )} className='border border-purple-500 rounded-2xl p-2'>Show/Hide</button>
        <button onClick={handleCopy} className='border border-purple-500 rounded-2xl p-2' >Copy</button>
      </div>
      <div className='flex items-center gap-4'>
      <button onClick={generateNewPassword} className='flex items-center border border-gray-600 fill-gray-200 bg-gray-500 text-white p-2 rounded-2xl'>Generate new password</button>
      <button onClick={()=> setPasswordParam( prev => prev==="dash"?"":"dash"  )} className='flex items-center border border-gray-600 fill-gray-200 bg-gray-500 text-white p-2 rounded-2xl'>Change password type</button>
      </div>
    </div>
    </>
  )
}

export default App

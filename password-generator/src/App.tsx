import './App.css'
import {getSeed} from "../generate_password"

import { GeneratedPasswordField } from './components/ui/field'
import LetterGlitch from './components/ui/LetterGlitch';  
import DecryptedText from './components/ui/DecryptedText';

function App() {
  
  
  
  
  
  
  return (
    <>
      <div className='absolute z-0 w-screen h-screen pointer-events-none opacity-50'>
          <LetterGlitch
            glitchSpeed={100}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
            glitchColors={["#dcb960" , "#0c8e76" , "#223932"]}

          />
      </div>

      <div className='absolute top-1/4 w-screen flex items-center justify-center my-2 py-2 z-10'>
        <DecryptedText 
            text={"Generate a Strong Password Instantly"}
          className='xl:text-4xl lg:text-3xl md-text-2xl text-lg text-neutral-200 font-major-mono font-light leading-[1.92] text-center'
          encryptedClassName='text-3xl text-white font-major-mono font-light italic leading-[1.92] text-center'
            speed={200}
            animateOn='both'
            revealDirection='center' />
      </div>

      
      <div className='relative flex items-center justify-center mx-auto my-auto h-screen outline outline-green-400'>
        <GeneratedPasswordField />
      </div>

      <div className='absolute bottom-5 w-screen text-neutral-500 font-jetbrains text-xs flex items-center justify-center my-2 py-2 z-10 '>
        <p>Seed : {getSeed()}</p>
      </div>


    </>
  )
}

export default App





// const [passwordParam , setPasswordParam] = useState<string>("dash")
// const [password, setPassword] = useState<string>(() => generatePassword(passwordParam))
// const [textorpassword , setTextorpassword] = useState<string>("password")

// const generateNewPassword = () => {
//   setPassword(generatePassword(passwordParam))
// }

// useEffect(() => {
//   setPassword(generatePassword(passwordParam))
// }, [passwordParam])


// const handleCopy = async() => {
//   try {
//     await navigator.clipboard.writeText(password)
//   }
//   catch (e) {console.error("copy failed" , e)}
// }

{/* <div className='flex flex-col items-center justify-center gap-4 outline outline-indigo-400 '>
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
</div> */}

{/* <div className='flex flex-col items-center justify-center gap-4  mx-auto my-auto h-screen outline outline-indigo-400 '> */}
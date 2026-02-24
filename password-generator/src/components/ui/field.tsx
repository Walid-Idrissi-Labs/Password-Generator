import { Button } from "../externalcomponents/button"
import { Field } from "../externalcomponents/field"
import { Input } from "../externalcomponents/input"
import { Alert, AlertDescription, AlertTitle } from "../externalcomponents/alert"

import {Copy , Eye , EyeOff, CheckCircle2} from "lucide-react"

import { useRef, useState , useEffect} from "react"
import {generatePassword} from "../../../generate_password"

interface GeneratedPasswordFieldProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  readOnly?: boolean
}

export function GeneratedPasswordField({ 
  readOnly = false 
}: GeneratedPasswordFieldProps) {




  const inputRef = useRef<HTMLInputElement>(null)
  const [passwordParam , setPasswordParam] = useState<string>("dash")
  const [password, setPassword] = useState<string>(() => generatePassword(passwordParam))
  const [textorpassword , setTextorpassword] = useState<string>("password")
  const [showCopiedBanner, setShowCopiedBanner] = useState<boolean>(false)

  
  const generateNewPassword = () => {
    setPassword(generatePassword(passwordParam))
  }
  
  useEffect(() => {
    setPassword(generatePassword(passwordParam))
  }, [passwordParam])


 
   const handleCopy = async() => {
    try {
      const currentValue = inputRef.current?.value ?? ""
      await navigator.clipboard.writeText(currentValue)
      setShowCopiedBanner(true)
      setTimeout(() => {
        setShowCopiedBanner(false)
      }, 2000)
    }
    catch (e) {console.error("copy failed" , e)}
  }
 
  return (
    <Field orientation="horizontal">
        <style>{`
          @keyframes slideDownFade {
            from {transform: translateY(-100%);opacity: 0;}
            to {transform: translateY(0);opacity: 1;}
          }
          @keyframes slideUpFade {
            from {transform: translateY(0);opacity: 1;}
            to {transform: translateY(-100%);opacity: 0;}
          }
        `}</style>
        
        {showCopiedBanner && (
          <div
            style={{position: 'fixed',top: 0,left: 0,right: 0,animation: 'slideDownFade 0.3s ease-out forwards, slideUpFade 0.3s ease-out 1.7s forwards',zIndex: 50,padding: '16px',display: 'flex',justifyContent: 'center'}}
          >
            <Alert className="max-w-md   dark:border-[#223932] dark:bg-neutral-950 text-green-50">
              <CheckCircle2 className="h-3 w-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Password copied to clipboard
              </AlertDescription>
            </Alert>
          </div>
        )}
        
        <div className="flex flex-col items-center justify-center w-full  outline-red-400">
          <div className="flex flex-row gap-0 items-center justify-center w-xs md:w-md lg:w-lg">
            <Button className="bg-[#223932] text-neutral-200 cursor-pointer" onClick={()=>setTextorpassword( prev => prev==="password"?"text":"password")}>  {textorpassword==="password"?<Eye/>:<EyeOff/>}   </Button>
              <Input 
                name="input-password"
                type={textorpassword} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                readOnly={readOnly}
                ref={inputRef}
                className="border border-neutral-700 text-white text-center font-bold font-jetbrains"
              />
              <Button className="bg-[#223932] text-neutral-200 cursor-pointer" onClick={handleCopy}  ><Copy/> </Button>
          </div>
          <div className="mt-5 w-[30vw] flex flex-col lg:flex-row gap-2 items-center justify-center  outline-green-400">
            <Button className="bg-[#dcb960] text-[#223932] cursor-pointer font-jetbrains" onClick={generateNewPassword}>Generate new password</Button>
            <Button className="bg-[#dcb960] text-[#223932] cursor-pointer font-jetbrains" onClick={()=> setPasswordParam( prev => prev==="dash"?"":"dash"  )}>Change password type</Button>
          </div>
      </div>
      </Field>
  )
}


        
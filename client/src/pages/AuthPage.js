import '@mantine/core/styles.css';
import { useEffect, useState } from 'react';
import { AuthenticationPassword } from '../components/Auth/AuthenticationPassword.tsx';
import { AuthenticationEmail } from '../components/Auth/AuthenticationEmail.tsx';
import { validateEmail } from '../modules/validateEmail.js';
import { fixText } from '../fix/fixText.js';
import { AuthenticationNew } from '../components/Auth/AuthenticationNew.tsx';
import { LoaderItem } from '../components/Loader/LoaderItem.tsx';
import { axiosCall } from '../modules/axiosCall.js';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const [step, setStep] = useState(1)
  const [newServiceName, setNewServiceName] = useState(false)
  const [text, setText] = useState(false)
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
  const [errorInputData, setErrorInputData] = useState('')
  const [errorInputName, setErrorInputName] = useState('')
  const [activBotton, setActivBotton] = useState(false)
  const [activBottonName, setActivBottonName] = useState(false)

  useEffect(() => {
    getText()
  }, [])

  const navigate = useNavigate()

  const getText = async () => {
    const res = await fixText()
    setText(res)
  }

  const startRequest = async () => {
    await axiosCall('POST', 'http://localhost:5000/auth/login', {email: email})
    .then((res) => {
      setStep(2)
      console.log('ok')
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
  }

  const startPasswordRequest = async () => {
    await axiosCall('POST', 'http://localhost:5000/auth/authemailcode', {authcode: password, email: email})
    .then((res) => {
      console.log(res.data.token)
      sessionStorage.setItem('token', res.data.token)
      setStep(4)
      // setTimeout(navigate('/main'), 1000)
      console.log('ok')
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
  }

  const createNewCamp = async () => {
    await axiosCall('POST', 'http://localhost:5000/auth/registration', {newServiceName: newServiceName, email: email, password: 'password'})
    .then((res) => {
      console.log(res)
      setStep(2)
      console.log('ok')
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
  }

  const stepSet = (step) => {
    setEmail(false)
    setPassword(false)
    setNewServiceName(false)
    setActivBotton(false)
    setActivBottonName(false)
    setErrorInputName('')
    setErrorInputData('')
    setStep(step)
  }

  const setValidatedEmail = (email) => {
    setErrorInputData('')
    setActivBotton(false)
    const res = validateEmail(email)
    if(res){
      setEmail(email)
      setErrorInputData('')
      setActivBotton(true)
    }
    else if(email === ''){
      setActivBotton(false)
      setErrorInputData('')
    }
    else{
      setActivBotton(false)
      setErrorInputData(text.badEmail)
    }
  }
  const setValidatedPassword = (password) => {
    setErrorInputData('')
    setActivBotton(false)
    const res = /^\d+$/.test(password)
    console.log(res)
    if(res){
      setPassword(password)
      setErrorInputData('')
      setActivBotton(true)
    }
    else if(password === ''){
      setActivBotton(false)
      setErrorInputData('')
    }
    else{
      setActivBotton(false)
      setErrorInputData(text.badPassword)
    }
  }
  const setValidatedNameNew = (name) => {
    setErrorInputName('')
    setActivBottonName(false)
    const res = /^[A-z\d]+$/.test(name)
    console.log(res)
    if(res){
      setNewServiceName(name)
      setErrorInputName('')
      setActivBottonName(true)
    }
    else if(name === ''){
      setActivBottonName(false)
      setErrorInputName('')
    }
    else{
      setActivBottonName(false)
      setErrorInputName(text.badServiceName)
    }
  }

  if(step === 1){
      return (
            <div>
              <AuthenticationEmail 
              setStep={stepSet} 
              text={text} 
              setEmail={setValidatedEmail} 
              clickOnBut={startRequest} 
              errorInputData={errorInputData} 
              activBotton={activBotton}
              />
            </div>
      );
  }
  else if(step === 2){
    return (
          <div>
            <AuthenticationPassword 
            setStep={stepSet} 
            text={text} 
            setPassword={setValidatedPassword} 
            clickOnBut={startPasswordRequest} 
            errorInputData={errorInputData} 
            activBotton={activBotton}
            />
          </div>
    )
  }
  else if(step === 3){
    return (
          <div>
            <AuthenticationNew 
            setStep={stepSet} 
            text={text} 
            setValidatedNameNew={setValidatedNameNew}  
            setEmail={setValidatedEmail}
            errorInputData={errorInputData}
            errorInputName={errorInputName} 
            clickOnBut={createNewCamp}
            activBotton={activBotton}
            activBottonName={activBottonName}
            />
          </div>
    )
  }
  else{
    return (
      <div className={'mainScreenLoader'}><LoaderItem/></div>
    )
  }

}

export default  AuthPage;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormikForm from './components/formikForm'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App

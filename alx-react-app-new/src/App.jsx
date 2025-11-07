import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'
import Counter from './components/counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 

        <Header />
        <MainContent />
        

        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <WelcomeMessage />
        <Counter />
        <Footer />

      </div>

    </>
  )
}

export default App

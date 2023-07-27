'use client'

import Modal from '../modal'
import SignUp from './sign-up'
import SignIn from './sign-in'
import { useState } from 'react'

const AuthModal: React.FC = () => {

  const [isSignIn, setIsSignIn] = useState<boolean>(true)

  const toggleBetweenModals = () => {
    setIsSignIn(prev => !prev)
  }


  return (
    <Modal showCloseButton>
      <div className='relative bg-primary w-80 sm:w-96 h-[478px] rounded-sm'>
        <div className={`w-full h-full ${!isSignIn && 'hidden'}`} >
          <SignIn toggleBetweenModals={toggleBetweenModals} />
        </div>
        <div className={`w-full h-full ${isSignIn && 'hidden'}`} >
          <SignUp toggleBetweenModals={toggleBetweenModals} />
        </div>
      </div>
    </Modal>
  )
}

export default AuthModal
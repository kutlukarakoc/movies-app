import Modal from '@/components/modal'

const SignIn: React.FC<{ toggleBetweenModals: () => void }> = ({ toggleBetweenModals }) => {

  return (
    <form action='' className='w-full h-full px-6 py-10 flex flex-col justify-center items-center absolute top-0 left-0'>

      <h3 className='text-center text-xl text-secondary'>Sign In</h3>

      <div className='mb-4 w-full'>
        <label htmlFor='email' className='text-xs text-zambezi mb-2'>Email</label>
        <input type='email' name='email' id='email' placeholder='Enter your email' className='bg-zambezi text-secondary placeholder:text-secondary rounded-sm h-10 w-full px-4 text-xs' />
      </div>
      <div className='mb-8 w-full'>
        <label htmlFor='password' className='text-xs text-zambezi mb-2'>Password</label>
        <input type='password' name='password' id='password' placeholder='Enter your password' className='bg-zambezi text-secondary placeholder:text-secondary rounded-sm h-10 w-full px-4 text-xs' />
      </div>

      <button type='submit' className='text-secondary bg-accent hover:bg-accent-light rounded-sm w-full h-10 mb-6'>Sign Up</button>

      <p className='text-xs text-center'>
        <span className='text-zambezi mr-1'>Don't have an account?</span>
        <br />
        <span className='text-secondary cursor-pointer' onClick={toggleBetweenModals}>Sign up now</span>
      </p>

    </form>
  )
}

export default SignIn
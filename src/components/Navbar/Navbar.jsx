import React from 'react'
import Logo from '../Logo/Logo'
import SearchInput from '../SearchInput/SearchInput'
import UserIcon from '../UserIcon/UserIcon'

const Navbar = () => {
  return (
    <>
        <div className='col-span-1'><Logo /></div>
        <div className='col-start-2 col-end-4'><SearchInput /></div>
        <div className='col-start-4 -col-end-1 justify-self-end mr-9'><UserIcon /></div>
    </>
  )
}

export default Navbar
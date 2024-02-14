import {headerLogo} from '../assets/images'
import {hamburger,close} from '../assets/icons'
import {navLinks} from '../constants/index'
import { useState } from 'react'

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='padding-x py-8 absolute z-30 w-full'>
      <nav className=' flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}/>
        </a>

        <ul className=' flex-1 flex justify-center items-center gap-10 max-lg:hidden'>
          {navLinks.map((item)=>(
            <li key={item.label} >
              <a href={item.href} className=' font-montserrat leading-normal text-lg text-slate-gray' target={item.target} rel='noopener noreferrer'>
                {item.label}                          
              </a>
            </li>
          ))}
        </ul>

        <div className=' hidden max-lg:flex' >
          <img src={toggle?close:hamburger} alt="menu" width={25} height={25} className=' object-contain cursor-pointer' onClick={()=>setToggle((prev)=>(!prev))}/>

          <div className={`${!toggle?'hidden':'flex'} p-6 bg-gray-200 absolute top-20 right-4 min-w-[160px] z-10 rounded-xl`}>
            <ul className=' flex-1 items-end gap-7 max-lg:flex hidden flex-col'>
              {navLinks.map((item)=>(
                <li key={item.label} className=' hover:font-bold' onClick={()=>setToggle((prev)=>(!prev))}>
                  <a href={item.href} className=' font-montserrat leading-normal text-lg text-slate-gray' target={item.target} rel='noopener noreferrer'>
                    {item.label}                          
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Nav
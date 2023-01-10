import React, { useEffect } from 'react'
import { useState } from 'react'





const Nav = () => {
    const [theme, setTheme] = useState(null);

    useEffect(()=> {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    },[])


    useEffect(()=> {
        if(theme === 'dark'){
            document.querySelector('body').classList.add('dark');
        }
        else {
            document.querySelector('body').classList.remove('dark')
        }
    },[theme])



    const handleThemeSwitch = () => {
        // setTheme(theme === 'dark' ? 'light': 'dark')
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
   <>
    <div className='flex justify-between items-baseline'>
        <div className='logo'>
            <a href='#' className='text-2xl font-extrabold text-blue-300 dark:text-stone-300'>PORTFOLIO</a>
        </div>

        <div className='mode-switch p-1 bg-indigo-300 rounded-lg'>
            <button  className='' onClick={handleThemeSwitch} >
                {theme === 'dark' ?  '🌞' : '🌙'}
            </button>
        </div>
    </div>
   </>
  )
}

export default Nav
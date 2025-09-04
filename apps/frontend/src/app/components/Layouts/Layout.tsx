import React from 'react'
interface ILayout{
    children: React.ReactNode
}
const Layout = ({children}:ILayout) => {
  return (
    <div className='max-w-[1560px] mx-auto w-full'>
      {children}
    </div>
  )
}

export default Layout
import React from 'react'
import NavItem from './NavItem';


interface MobileMenuprops{
    links:[];
    
}
const MobileMenu = ({links}:MobileMenuprops) => {
  return (
   <ul className='flex flex-col py-4 items-center'>
    {links.map((link, index)=>(
        <li key={index}>
            <NavItem href={link.path} title={link.title}></NavItem>


        </li>
    ))}


   </ul>
  )
}

export default MobileMenu
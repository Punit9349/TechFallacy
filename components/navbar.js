import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles1 from '../styles/Navbar.module.css'


const Navbar = () => { 
      const router = useRouter()
      const [boola, setboola] = useState(false);
      const [func, setfunc] = useState("flex");
      const [func1, setfunc1] = useState("none");
      const [logg, setlogg] = useState("none");
      const [logg1, setlogg1] = useState("flex");
      console.log(func1);
      const onChange=()=>{
         setboola(true);
         setfunc('none');
         setfunc1('flex');
      }

      const onChange1=()=>{
        setboola(false);
        setfunc('flex');
        setfunc1('none');
      }
      const handleLogout=()=>{
        localStorage.removeItem('token');
        router.push('/Login');
        setlogg('none');
        setlogg1('flex');
      }      

      useEffect(() => {
        if(localStorage.getItem('token')){
          setlogg('flex');
          setlogg1('none');
        }
      
      
      },[] )
      
      return (
        <div>
          <nav className={styles1.mainnav}  >
                   <div className={styles1.imgdiv}>
                   <Link href='/'>
                   <a>
                   <picture>
                   <img src="techfallacy-4.png" alt="" className={styles1.img} />
                   </picture>
                   </a>
                   </Link>
                   </div>
        <ul data-visible={boola} className='menu' >

         
          <Link href='/' >
             <a><li>Laptops</li></a>
           </Link>

          <Link href='/Laptops/Laptops' >
             <a><li>Mobiles</li></a>
           </Link>

          <Link href='/latestblogs' > 
             <a><li>Blog</li> </a>
          </Link>

          <Link href='/about' >
            <a><li>About Us</li></a>
           </Link>

          <Link href='/contact' >
            <a><li>Contact</li></a>
           </Link>


        </ul>
        <div className={styles1.bumton}> 
          <button style={{display:logg}} className={styles1.button} onClick={handleLogout} id={styles1.button2}>Logout</button>
          <Link href='/login' >
            <a><button style={{display:logg1}} className={styles1.button}>Login</button></a>
           </Link>

          <Link href='/Signup' >
            <a><button style={{display:logg1}} className={styles1.button} id={styles1.button2}>Signup</button></a>
           </Link> 

         </div>  
          
           <i className="fa-solid fa-bars fa-xl" id={styles1.icon} onClick={onChange} style={{display:func}}></i>
           <i className="fa-solid fa-xmark fa-2xl" id={styles1.icon} onClick={onChange1} style={{display :func1}}></i>
      </nav>
    </div>
  )
 }

export default Navbar
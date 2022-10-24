import React from 'react'
import { useSession , signIn, signOut } from 'next-auth/react'
import Image from 'next/image';

const Login1 = () => {
    const  {data:session} = useSession();
    if(session){

        return (
          <div className='my-44'>
            <p>Welcome, {session.user.email}</p>
            <a><picture><img src={session.user.image} alt="" style={{borderRadius: '50px'}}/></picture></a>
            <button onClick={()=> signOut()}>SignOut</button>
          </div>
        );
    }
    else{
        return( 
          <div className='my-44'>
              <p>You are not singed in!!</p>
              <button onClick={()=> signIn()}>SignIn</button>
          </div>
        );
    }
}

export default Login1
import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'

const Account = () => {
    const  {data:session, status} = useSession();
    if(status==='authenticated'){
        return (
          <div className='my-44'>
            <p>Welcome, {session.user.name}</p>
            <button onClick={()=> signOut()}>SignOut</button>
          </div>
        );
    }
    else{
        return( 
          <div className='my-44'>
              <p>You are not singed in!!</p>
          </div>
        );
    }
}

export default Account

export const getServerSideProps= async(context)=>{
    const session= await getSession(context);
    if(!session){
        return {
            redirect:{
                destination: '/login1'
            }
        }
    }
    return{
        props: {session},
    };
};
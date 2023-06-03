import React from 'react'
import { useAuth } from '../context/Roless'
function Admin() {
    const { first , setFirst } = useAuth();
    
  return (
    <div>
     {
        first&& (
            <>
            <p>{first.username}</p>
            <p>{first.email}</p>
            {
                first.roles && (
                    <>
                    <ul>
                        {first.roles.map((role,index) =>{
                            <li key={index}>{role}</li>
                        })}
                    </ul>
                    </>
                )
            }
            </>
        )
     }
    </div>
  )
}

export default Admin
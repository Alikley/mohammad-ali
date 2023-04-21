import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Users from '../../hooks/Users'

function Panel({islogin,logout}) {

  return (

        <>
            {
                islogin !== true?
                <Navigate to="/login" replace={true} />
                :
                <main className='panel'>
                    <Link to="/login" onClick={() => logout()}>خارج شدن</Link>
                    <Users />
                </main>
            }
        </>

  )
}

export default Panel

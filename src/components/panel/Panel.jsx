import { Link } from 'react-router-dom'
import Users from '../../hooks/Users'
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import Nav from 'react-bootstrap/Nav';
import './Panel.scss'

function Panel() {
    const userLog = useContext(LoginContext)
  return (

        <>
                <main className='panel'>
                <div class="topnav">
                        <Link to="/login" onClick={userLog.logout} className='link'>خارج شدن</Link>
                        <Link to="/users" className='link'>لیست مهارت اموز</Link>
                </div>
                    
                </main>
            
        </>

  )
}

export default Panel

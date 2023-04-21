
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

function Layout({islogin}) {
  return (
    <div>
        <Header islogin={islogin} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
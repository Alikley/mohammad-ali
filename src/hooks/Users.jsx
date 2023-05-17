import  { useEffect, useState } from 'react'
import axios from "../api/axios";
import  Cookies  from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './use';
function Users() {
    const [userlist,setUesrlist] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    useEffect(() =>{
        const token = Cookies.get('authorization');
        if(!token){
            navigate('/')
        }
    })
    
    useEffect(() =>{
        const fetchUserList = async () => {
            setLoading(true)
            setError(null)
            try{
                const response = await axios.get('/moodle/user/student/all?pageNum=0&pageSize=15',{
                    headers:{
                        Authorization:setAuth,
                    },
                });
                setUesrlist(response.data)
            }catch (error){
                setError(error.message)
            }
            setLoading(false)
        };
        fetchUserList();
    },[setAuth])

    const  renderUserlist = () =>{
        if(!userlist){
            return null
        }
    
  return (
    <div>
        {userlist.map((user) =>(
            <div key={user.id}>
                <div>{user.id}</div>
            </div>
        ))}
    </div>
  )
}

}


export default Users

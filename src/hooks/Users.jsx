import  { useEffect, useState } from 'react'
import axios from "../api/axios";
import { useAuth } from './use';
function Users() {
    const [userlist,setUesrlist] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    const { setAuth } = useAuth();
    
    const authorization= JSON.parse(localStorage.getItem('authorization'))
    
    useEffect(() =>{
        const fetchUserList = async () => {
            setLoading(true)
            setError(null)
            try{
                const response = await axios.get('/moodle/user/student/all?pageNum=0&pageSize=15',{
                    headers:{
                        Authorization:authorization,
                    },
                });
                setUesrlist(response.data)
            }catch (error){
                setError(error.message)
            }
            setLoading(false)
        };
        fetchUserList();
    },[authorization])

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
return(
    <div>
        {
            renderUserlist()
        }
    </div>
)
}


export default Users
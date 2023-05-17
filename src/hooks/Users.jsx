import  { useEffect, useState } from 'react'
import axios from "../api/axios";
import  Cookies  from 'js-cookie';
function Users() {
    const [userlist,setUesrlist] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    
    // const authorization= JSON.parse(Co.getItem('authorization'))

    const authorization = Cookies.get("authorization")
    
    useEffect(() =>{
        const fetchUserList = async () => {
            setLoading(true)
            setError(null)
            console.log(authorization);
            try{
                const response = await axios.get('/moodle/user/student/all?pageNum=1&pageSize=15',{
                    headers:{
                        Authorization:`bearer ${authorization}`,
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

import  { useEffect, useState } from 'react'
import axios from 'axios';
import  Cookies  from 'js-cookie';
import { useParams,useNavigate } from 'react-router-dom';

function User() {
    const [userlist,setUesrlist] = useState("")
    // const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    const navigate = useNavigate();
    let {userId} = useParams()
    
    // const authorization= JSON.parse(Co.getItem('authorization'))

    
    useEffect(() =>{
        const authorization = Cookies.get("authorization")
        const fetchUserList = async () => {
            // setLoading(true)
            setError(null)
            try{
                let headersList = {
                    // "Accept": "*/*",
                    // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Authorization": `Bearer ${authorization}`
                   }
                   
                   let reqOptions = {
                     url: "https://kaaryar.hossein.codes/moodle/user/student/all?pageNum" + userId,
                     method: "GET",
                     headers: headersList,
                   }
                   
                   let response = await axios.request(reqOptions);
                   setUesrlist(response.data);  
                   console.log(response.data);


            }catch (error){
                setError(error.message)
            }
            // setLoading(false)
        };
        fetchUserList();
    },[userId])


    
    
  return (
    <div className='list-user'>

        <h1>User {userId}</h1>
        <button onClick={()=>navigate("/panel")}>برگشت</button>
        {userlist?
             <div className='user' style={{background:"#efefef"}}>
                <div className='name' style={{color:"red"}}>{userlist.firstName} {userlist.lastname} </div>
                <div className='email'>{userlist.email}</div>
                <div className='email'>{userlist.address}</div>

            </div>
            
         :
         <div>NotFound....</div>
        }
    </div>
  )
}




export default User
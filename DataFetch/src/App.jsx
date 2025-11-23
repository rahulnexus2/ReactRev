import { useEffect, useState } from 'react'

function App() {
  const [Users, setUsers] = useState([])
  const [Loading,setLoading]=useState(false);
  const[Error,setError]=useState(false);

  useEffect(()=>{

    const fetchuser=async()=>{

      try{
        setLoading(true)
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(res)
        if(!res.ok)
        {
          
          throw new Error("Api Failed")
        }

        const data=await res.json();
        setUsers(data);
        setLoading(false)
      }
      catch(error){
        setError(true)
        setLoading(false);

      }
    }

    fetchuser();

  },[])

  if(Loading)
  {
    return <h1>Loading...</h1>
  }
  if(Error)
  {
    return <h1>Error </h1>
  }
  return (
    <>
    <h1>Users</h1>
    {Users.map((user)=>(
      <p key={user.id}>{user.name}</p>

    )
      
    )}
      
     
    </>
  )
}

export default App

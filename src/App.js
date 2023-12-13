
import React, {useState} from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';


function App() {
  let[showForm, setShowForm] = useState(false);
  let[user,setUser]=useState([])


  function addUserHandler(){
    setShowForm(true);
  }

  function closeForm(){
    setShowForm(false)
  }

  //SENDING OR STORING THE DATA TO FIREBASE
  function onCreateUser(user)
     {
        //WITH FETCH WE CAN ALSO DO THAT
        // fetch("https://travelform-8385e-default-rtdb.firebaseio.com/user.json",{
        //     method:"POST",
        //     body:JSON.stringify(user)
        // })
        // .then((resp)=>{console.log(resp)})

        //HERE WE DONE IT WITH THE HELP OF AXIOS
        axios.post("https://travelform-8385e-default-rtdb.firebaseio.com/user.json",user)
     }

  function getData()
  {
    // 
    let users=[];
    axios.get("https://travelform-8385e-default-rtdb.firebaseio.com/user.json")
    .then((response)=>{
      return response.data;
    })
    .then((data)=>{
      for(let key in data)
      {
       users.push({...data[key],id:key})
      }
      setUser(users)
    })
    
  }

  return (
      <div>
        <div className='page-header'>
          <button className='btn btn-success' onClick={addUserHandler}>Add User</button>

          <button className='btn btn-normal' onClick={getData}>Get Users</button>
        </div>
        <UserDetails user={user}></UserDetails>
        {showForm && <UserForm onCreateUser={onCreateUser} closeForm={closeForm}></UserForm>}
      </div>
  );
}

export default App;

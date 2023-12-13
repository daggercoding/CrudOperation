import React,{useRef} from 'react';
import './UserForm.css';


function UserForm(props){
    let fname=useRef()
    let lname=useRef()
    let email=useRef()
    let password=useRef()
    let country=useRef()
    let city=useRef()
    let date=useRef()
    let gender=useRef()

    function CreateUser(event)
    {
        event.preventDefault()
        let user={
        FirstName:fname.current.value,
        LastName:lname.current.value,
        Email:email.current.value,
        Password:password.current.value,
        Country:country.current.value,
        City:city.current.value,
        Date:date.current.value,
        Gender:gender.current.value
      }
      props.onCreateUser(user)
      props.closeForm()
    }
    
     

    return <>
            <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="close" onClick={props.closeForm}>&times;</div>
                        <h3>Create new user</h3>
                        <div class="user-form">
                            <form onSubmit={CreateUser}>
                                <div>
                                    <input type="text" placeholder="First name" ref={fname} />
                                    <input type="text" placeholder="Last name" ref={lname}/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" ref={email} />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" ref={password} />
                                    <input type="password" placeholder="Confirm Password" />
                                </div>
                                <div>
                                    <select name="country" ref={country}>
                                        <option value="India">India</option>
                                        <option value="Germany">Germany</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    <select name="city" ref={city}>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Berlin">Berlin</option>
                                        <option value="New York">New York</option>
                                        <option value="London">London</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" placeholder="Date of Birth" ref={date} />
                                    <select name="gender" ref={gender}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Unknown">Unknown</option>
                                    </select>
                                </div>
                                <button className='add-user-button'>Create User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
}

export default UserForm;
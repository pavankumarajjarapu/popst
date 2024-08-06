import React, { useRef } from 'react'

function SignupForm() {
    let firstNameInputRef=useRef()
    let lastNameInputRef= useRef()
    let ageInputRef=useRef()
    let mailInputRef=useRef()
    let passwordInputRef=useRef()
    let MobileNumberInputRef=useRef()
    let profilePictureInputRef=useRef()
    let sendToServer= async ()=>{
        let dataToSendDB= {
            firstName:firstNameInputRef.current.value ,
            lastName:lastNameInputRef.current.value,
            age:ageInputRef.current.value,
            mail:mailInputRef.current.value,
            password:passwordInputRef.current.value,
            MobileNumber:MobileNumberInputRef.current.value,
        }
        console.log(dataToSendDB)
        let JSONDataToSend= JSON.stringify(dataToSendDB)
        console.log(JSONDataToSend)
        let myHeader= new Headers();
        let reqOptions={
            method:"POST",
            body:JSONDataToSend,
            headers:myHeader,
        }
        myHeader.append("content-type","application/json");
        let JSONData= await fetch("http://localhost:2389/signup",reqOptions);
        let JSOData=  await JSONData.json()
        console.log(JSOData)
    }
  return (
    <div>
      <div>
        <form> 
            <h1>SignupForm</h1>
            <div>
                <label type="text">FirstName</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label type="text">LastName</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label type='number'>Age</label>
                <input ref={ageInputRef}></input>
            </div>
            <div>
                <label type="mail">Mail</label>
                <input ref={mailInputRef}></input>
            </div>
            <div>
                <label type="password">Password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label type='number'>MobileNumber</label>
                <input ref={MobileNumberInputRef}></input>
            </div>
            {/* <div>
                <label>ProfilePicture</label>
                <input ref={profilePictureInputRef}></input>
            </div> */}
            <button type='button' onClick={()=>{sendToServer()}}> SignUp</button>
        </form>
      </div>
    </div>
  )
}

export default SignupForm

import { useState } from 'react'
import style from "./signup.module.css"
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import swal from 'sweetalert';
import { useRouter } from 'next/router'
import Head from 'next/head';
import axios from 'axios';

const SignUp = () => {
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const router = useRouter()



function signup() {
    if(Name && Password && Email){
      

// if (error?.msg === " User Already Exist with this Email ") {
//     swal({
//         text:"You Are Already Registered",
//         icon:"warning",
//      })   
// }
axios.post("/api/register",{name:Name,email:Email,password:Password}).then((result) => {
    console.log(result?.data?.msg)

    swal({text:result?.data?.msg,icon:"success", buttons:"Ok!"})
    router.push("/Auth/Login")
}).catch((err) => {
    console.log(err?.response?.data)
    swal({text:err?.response?.data?.msg,icon:"error"})

});



    }else{
     swal({
        text:"Fill All The Field",
        icon:"error",
        buttons:"Sorry!",
     })
    }
}


    return (
        <div className={style.mainDiv}>
            <Head>
        <title>Register User</title>
        <meta name="description" content="Created by Shaheer Shahzad" />
      </Head>
            {/* <div style={{ paddingTop: "5vmax" }} /> */}
            <div className={style.SignUpFormContainer}>
                <h2>Registeration</h2>
                <br />

                <div>
                    <FaceSharpIcon />
                    <input type={"text"} placeholder="Name" value={Name} onChange={e => setName(e.target.value)} />
                </div>
                <br />
                <div>
                    <EmailSharpIcon />
                    <input type={"email"} placeholder=" Email" value={Email} onChange={e => setEmail(e.target.value)} />
                </div>
                <br />

                <div>
                    <LockSharpIcon />
                    <input type={"password"} placeholder="Password" value={Password} onChange={e => setPassword(e.target.value)} />
                </div>



                <div className={style.btn}>
                    {/* <ArrowForwardIcon /> */}
                    <button onClick={signup}> SignUp</button>
                </div>


                <div className={style.Redirect}>
    <p style={{cursor:"pointer"}} onClick={()=> router.push("/Auth/Login")}> Already have an account!
        <span>Login</span>
    </p>
</div>



            </div>

<div className={style.left}>
<div>
<h1> Glad to see you! </h1>

<h3>Register Yourself To Continue</h3>
</div>
</div>

            {/* <div style={{ paddingTop: "5vmax" }} /> */}
        </div>
    )
}

export default SignUp

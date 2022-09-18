import style from "./SignIn.module.css"
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import { useState } from 'react';
import swal from "sweetalert";
import { useRouter } from 'next/router'
import Head from "next/head";

const SignIn = () => {
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const router = useRouter()


    function login() {
        if(Password && Email){

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
        <title>Login User</title>
        <meta name="description" content="Created by Shaheer Shahzad" />
      </Head>

<div className={style.SignUpFormContainer}>
                <h2>Login To Your Account</h2>
                <br />
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
                    <button onClick={login}> Login</button>
                </div>



<div className={style.Redirect}>
    <p style={{cursor:"pointer"}} onClick={()=> router.push("/Auth/Register")} >{` Don't`} have account! <span>Register</span>
    </p>
</div>


            </div>




<div className={style.left}>
<div>
<h1> Welcome Back! </h1>

<h3>Login To Continue</h3>
</div>
</div>

        </div>
    )
}

export default SignIn

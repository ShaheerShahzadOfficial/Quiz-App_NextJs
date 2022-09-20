import styles from "./name.module.css"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { Button, Paper } from "@mui/material"

const Name = () => {
  const router = useRouter()
  const { name } = router.query




  return (
    <div>

<div className={styles.NavBar}>
<Paper variant="elevation"  elevation={6} sx={{padding:"0.5vmax",textAlign:"center"}} >

  <h2 style={{fontSize:"2vmax",fontWeight:"bolder",fontFamily:"Roboto"}}>Quiz For {name} </h2>
  </Paper>
</div>

<br />

<div className={styles.QuizContainer}>

<Paper variant="elevation" elevation={10} sx={{width:"70%",margin:" 1vmax auto 2vmax auto",padding:"1vmax",textAlign:"center"}}>
<br /><br />
<h2 style={{fontSize:"4vmax",fontWeight:"bolder",fontFamily:"Roboto"}}>  Join {name} Quiz </h2>
<br /><br />
<h3  style={{fontSize:"3vmax",fontWeight:"bolder",fontFamily:"Roboto"}} >This Quiz is For Batch 7 And Sir Haiders Students</h3>
<br />
<Button onClick={()=> router.push("/Student/StartQuiz/HTML")} variant="contained" color="inherit"  sx={{padding:"1vmax", fontWeight:"bolder",fontSize:"1vmax" }}> Start Quiz </Button>
</Paper>

</div>


<br />


    </div>
  )
}

export default Name
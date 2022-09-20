import styles from "./name.module.css"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { Button, Paper } from "@mui/material"

const Name = () => {
  const router = useRouter()
  const { name } = router.query
  const [QuestionNo, setQuestionNo] = useState(1)

  const arr = ["hello", "world", "h1"]

  return (
    <div>

      <div className={styles.NavBar}>
        <Paper variant="elevation" elevation={6} sx={{ padding: "0.5vmax", textAlign: "center" }} >

          <h2 style={{ fontSize: "2vmax", fontWeight: "bolder", fontFamily: "Roboto" }}>Quiz For {name} </h2>
        </Paper>
      </div>

      <br />

      <div className={styles.QuizContainer}>

        <Paper variant="elevation" elevation={10} sx={{ width: "70%", margin: " 1vmax auto 2vmax auto", padding: "1vmax" }}>
          <br />
          <h2 style={{ fontSize: "2.4vmax", fontWeight: "bolder", fontFamily: "Roboto" }}> Question {QuestionNo + 1} </h2>
          <h3 style={{ fontSize: "2vmax", fontWeight: "bolder", fontFamily: "Roboto" }} >Quiz Question</h3>
          <div className={styles.OptionsContainer}>
            <Button variant="contained" color="info" sx={{ padding: "1vmax", fontWeight: "bolder", fontSize: "1vmax" }} > Op 1 </Button>
            <Button variant="contained" color="info" sx={{ padding: "1vmax", fontWeight: "bolder", fontSize: "1vmax" }} > Op2 </Button>
            <Button variant="contained" color="info" sx={{ padding: "1vmax", fontWeight: "bolder", fontSize: "1vmax" }} > Op3 </Button>
            <Button variant="contained" color="info" sx={{ padding: "1vmax", fontWeight: "bolder", fontSize: "1vmax" }} >   Op4 </Button>
          </div>
          <br />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <Button variant="contained" color="secondary" sx={{ padding: "1vmax", fontWeight: "bolder", fontSize: "1vmax", marginRight: "60%" }} disabled={QuestionNo + 1 === 1 ? true : false}> Back </Button>
            <Button variant="contained" color="success" sx={{ padding: "1vmax", fontWeight: "bolder", fontSize: "1vmax", marginLeft: "60%" }} disabled={QuestionNo + 1 === arr.length ? true : false}> Next </Button>
          </div>
        </Paper>

      </div>


      <br />


    </div>
  )
}

export default Name
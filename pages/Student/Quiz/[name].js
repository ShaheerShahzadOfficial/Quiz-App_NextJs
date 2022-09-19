import styles from "./name.module.css"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
const Name = () => {
  const [ms, setMs] = useState(0)
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)

  const router = useRouter()
  const { name } = router.query




  return (
    <div>


      <div className={styles.Nav}>
        <div> <h1>  Quiz For {name} </h1> </div>
        {/* <div> <h2>miliSecond {ms}  </h2> </div>
        <div> <h2>Seconds {second}  </h2> </div>
        <div> <h2> Minute {second}  </h2> </div> */}



<div className={styles.QuizContainer}>
  <div> </div>
</div>

      </div>



    </div>
  )
}

export default Name
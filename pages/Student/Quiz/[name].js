import styles from "./name.module.css"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
const Name = () => {
    const [ms, setMs] = useState(1000)
    const [second, setSecond] = useState(0)

    const router = useRouter()
    const {name} = router.query

useEffect(() => {

if (ms>0) {
    setMs(ms-1)
   setSecond(second+1)
}

 if (ms <=0) {
    alert("times Up")
 }

}, [ms])

    
    



  return (
    <div>


<div className={styles.Nav}>
<div> <h1>  Quiz For {name} </h1> </div>
<div> <h2>Timer {ms}  </h2> </div>
<div> <h2>Timer {ms}  </h2> </div>


</div>



    </div>
  )
}

export default Name
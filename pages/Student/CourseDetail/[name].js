import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from "./CourseDetail.module.css"
const Id = () => {

    const router = useRouter()
    const { name } = router.query


    return (
<div>

        <div>

<Head>
        <title>{name}</title>
        <meta name="description" content="Created by Shaheer Shahzad" />
      </Head>

        
                <h1 className={styles.Studentheading}>{name} (4 Trainers)</h1>
            </div>

<div  className={styles.TrainerContainer}>

<div  className={styles.Trainer}>
    
<h2>Sir Haider</h2>
 
</div>




        </div>
   

        </div> 
    )
}

export default Id
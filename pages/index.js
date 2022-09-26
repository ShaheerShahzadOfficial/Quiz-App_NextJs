import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Created by Shaheer Shahzad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<main className={styles.main}> 
{/* <p style={{cursor:"pointer"}} onClick={()=> router.push("/Auth/SignIn")}> Login!</p> */}

<div className={styles.card}>
<h1> Welcome To  Quiz App  </h1>
<h2>The Web where you can create quiz and Answer your quiz</h2>
<h3>Please Login To Continue</h3>
<br />

<Link href={"/Auth/Login"}>
<button>Login</button>
</Link>

</div>

</main>

<br /><br />

      <footer className={styles.footer}>
          CopyRight @ Shaheer Shahzad
      </footer>
    </div>
  )
}

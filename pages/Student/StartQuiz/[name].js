import styles from "./name.module.css";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, LinearProgress, Paper } from "@mui/material";

const Name = () => {
  const router = useRouter();
  const { name } = router.query;
  const [QuestionNo, setQuestionNo] = useState(0);
  const totalTime = 1;
  const [seconds, setSeconds] = useState(0);

  const arr = [
    {
      question:
        "At the Start of a standard game of the monopoly, if you throw a double six,which square would land on",
      option1: "Electric",
      option2: "Water Works",
      option3: "chjance",
      option4: "communityt chest",
      answer: "Electric"
    },
    {
      question:
        "At the Start of a standard game of the monopoly, if you throw a double six,which square would land on",
      option1: "Electric",
      option2: "Water Works",
      option3: "chjance",
      option4: "communityt chest",
      answer: "chjance"
    },
    {
      question: "The sum of 4+2",
      option1: "2",
      option2: "6",
      option3: "4",
      option4: "8",
      answer: "6"
    },
    {
      question: "Java Script is a ?",
      option1: "Scripting Language",
      option2: "Not option",
      option3: "Option B",
      option4: "communityt chest",
      answer: "Scripting Language"
    }
  ];

  useEffect(() => {
    
    
    // arr.length >= QuestionNo+1
    //   ? seconds <= totalTime
    //     ? setTimeout(() => setSeconds(seconds + 1), 1000)
    //     : setTimeout(() => setQuestionNo(QuestionNo + 1), setSeconds(0), 1)
    //   : console.log("Answer Printed");
arr.length <= QuestionNo+1 ? console.log("quiz ended"):
seconds<=totalTime? setTimeout(() => {
  setSeconds(seconds + 1)
}, 1000) : setTimeout(() => setQuestionNo(QuestionNo === 3 ? QuestionNo :QuestionNo+1), setSeconds(0), 1)
 


  }, [QuestionNo, arr.length, seconds, totalTime]);

  const style = [
    {
      padding: "1vmax",
      fontWeight: "bolder",
      fontSize: "1vmax"
    }
  ];
  var haveIt = [2,0,1,3];



  let array = [];
  QuestionNo < arr.length &&
    array.push({
      question: arr[haveIt[QuestionNo]]?.question,
      option1: arr[haveIt[QuestionNo]]?.option1,
      option2: arr[haveIt[QuestionNo]]?.option2,
      option3: arr[haveIt[QuestionNo]]?.option3,
      option4: arr[haveIt[QuestionNo]]?.option4
    });

  return (
    <div>
      <div className={styles.NavBar}>
        <Paper
          variant="elevation"
          elevation={6}
          sx={{ padding: "0.1vmax", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "2vmax",
              fontWeight: "bolder",
              fontFamily: "Roboto"
            }}
          >
            Quiz For {name}{" "}
          </h2>

          <h3>00 : {seconds}</h3>
        </Paper>
      </div>


{   arr.length <= QuestionNo+1 ? <div>

  <br/><br/><br/><br/><br/>
<Paper
          variant="elevation"
          elevation={10}
          sx={{
            width: "80%",
            margin: " 1vmax auto 2vmax auto",
            padding: "1vmax"
          }}
        >

<h2
            style={{
              fontSize: "2.4vmax",
              fontWeight: "bolder",
              fontFamily: "Roboto",
              textAlign:"center"
            }} >
            Quiz Ended
          </h2>

          <h2 style={{
              fontSize: "2.4vmax",
              fontWeight: "bolder",
              fontFamily: "Roboto",
              textAlign:"center"
            }} >you pass/fail the quiz</h2>

          </Paper>
</div>:

  




      <div>
        <Paper
          variant="elevation"
          elevation={10}
          sx={{
            width: "80%",
            margin: " 1vmax auto 2vmax auto",
            padding: "1vmax"
          }}
        >
          <LinearProgress
            variant="determinate"
            value={(seconds / totalTime) * 100}  // Progress Bar value in Percentage
            sx={{ padding: "0.5vmax", margin: "auto" }}
          />    

          <br />
          <h2
            style={{
              fontSize: "2.4vmax",
              fontWeight: "bolder",
              fontFamily: "Roboto"
            }} >
            Question {QuestionNo + 1}
          </h2>
{/*  Mapping Array to Jsx  */}
          {array.map((item, i) => (
            <div key={i}>
              <h3
                style={{
                  fontSize: "2vmax",
                  fontWeight: "bolder",
                  fontFamily: "Roboto"
                }}
              >
                {item.question}
              </h3>
              <div className={styles.OptionsContainer}>
                <Button variant="contained" color="success" sx={style}>
                  {item.option1}
                </Button>
                <Button variant="contained" color="success" sx={style}>
                  {item.option2}
                </Button>
                <Button variant="contained" color="success" sx={style}>
                  {" "}
                  {item.option3}
                </Button>
                <Button variant="contained" color="success" sx={style}>
                  {item.option4}
                </Button>
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              margin: "auto",
              width: "100%"
            }}
          >
            <div style={{ margin: "auto" }}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  padding: "1vmax",
                  fontWeight: "bolder",
                  fontSize: "1.3vmax",
                  width: "10vmax"
                }}
                disabled={QuestionNo + 1 === 1 ? true : false}
              >
                {" "}
                Back{" "}
              </Button>
            </div>

            <div style={{ margin: "auto" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "1vmax",
                  fontWeight: "bolder",
                  fontSize: "1.3vmax",
                  width: "10vmax"
                }}
                disabled={QuestionNo + 1 === arr.length ? true : false}
              >
                {" "}
                Next{" "}
              </Button>
            </div>
          </div>
        </Paper>
      </div>
     
}


    </div>
  );
};

export default Name;

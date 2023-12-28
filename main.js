let userScore = 0;
let countDownScore = 10;


const removeBackground =()=>{
  document.getElementById("gameCover").style.display ="none";
}

const intervalCountDown = setInterval(countDown, 1000)


const outputRandomNo = () => {
  outputNoOne = Math.floor(Math.random() * 11)
  outputNoTwo = Math.floor(Math.random() * 11)

  document.getElementById("randomNoOne").innerHTML = outputNoOne;
  document.getElementById("randomNoTwo").innerHTML = outputNoTwo;

}


//check if your answer and answer to question is correct

const check = () => {
  //console.log(check)
  let answer = eval(outputNoOne + outputNoTwo)
  let userAnswer = document.getElementById("answer").value;

  if (answer == userAnswer) {
    //alert("you are right"(0))
    outputRandomNo();
    clearInput();
    addScore()

  } else {
    subtractScore();
    clearInput();
  }

  // console.log(answer)
}

outputRandomNo();

const callRandom = () => {

  setInterval(outputRandomNo, 500);
}

const clearInput = () => {
  let inputElem = document.getElementById("answer").value = " ";
}

//this is used to call the function check() with the enter key
let getAnswer = document.getElementById("answer");
getAnswer.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    check(e);
  }
});

const addScore = () => {

  userScore += 1;
  document.getElementById("writeScore").innerHTML = "score : " + userScore;
  console.log("score : " + userScore)
  //document.getElementById("writeScore")
}

const subtractScore = () => {

  userScore -= 1;
  document.getElementById("writeScore").innerHTML = "score : " + userScore;

  console.log("score : " + userScore)

}

//change this so you can create a count down
//setInterval(countDown, 5000)


function countDown() {
  countDownScore -= 1;
  //console.log(countDownScore)
  document.getElementById("countDownOutput").innerHTML = countDownScore;

  if (countDownScore === 0) {
    clearInterval(intervalCountDown)
    if (userScore >= 3) {
      alert("won")
      document.write("you won !!!!!")
    }
    else {
      alert("failed")
      document.write("you lost")
    }
  }
}

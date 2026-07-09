  console.log("Hello from inline JS!");

function getGrade() {
event.preventDefault(); 
    const dialog = document.getElementById("modal");

    dialog.showModal();

    const close = document.getElementById("close")

    close.addEventListener("click", () => dialog.close())

    const scoreStr = document.getElementById("score").value;

    let outputRemark = document.getElementById("remark")

    const score = Number(scoreStr.trim())
if (score == 100) {
     outputRemark.innerText = `Score: ${score}% | Grade: A++ (Perfect Score)
    ---------------------------------------------
    Absolute perfection! You hit the ceiling and scored 100%. 
    Wear this flawless result with pride and keep conquering new heights!`
} 

else if (score >= 70  && score <= 100) {
    outputRemark.innerText = `Score: ${score}% | Grade: A (Excellent) 
    ---------------------------------------------
    Outstanding performance! You are operating at an elite level. 
    Do not lift your foot off the gas—keep pushing boundaries and setting the pace!`;
  } 
  
  else if (score >= 60 && score <= 69) {
    outputRemark.innerText = `Score: ${score}% | Grade: B (Good)
    ---------------------------------------------
    Great job! This is a highly competitive result that shows strong skills. 
    Track down the minor gaps to push yourself into that top bracket next time.`;
  } 
  
  else if (score >= 50 && score <= 59) {
    outputRemark.innerText = `Score: ${score}% | Grade: C (Fair) 
    ---------------------------------------------
    Solid progress. You crossed the finish line safely, but there is clear room to scale upwards. 
    Focus on refining your approach to climb even higher.`;
  } 
  
  else if (score >= 45 && score <= 49) {
    outputRemark.innerText = `Score: ${score}% | Grade: D (Poor) 
    ---------------------------------------------
    You made it through, but take this as an important wake-up call. 
    You possess much more potential than this result displays. Let's aim much higher.`;
  } 
  
  else if (score >= 0 && score <= 44) {
    outputRemark.innerText = `Score: ${score}% | Grade: F (Fail) 
    ---------------------------------------------
    Although a setback. Remember that a low score is just a momentary event, never your permanent identity. 
    Look at where things went wrong, build a sharper strategy, and bounce back.`;
  }
  
  else{
    outputRemark.innerText = `Enter A Valid Score!`
  }
}

const grade = document.getElementById("generatesRemark")
grade.addEventListener("submit", () => getGrade())

  
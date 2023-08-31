const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

//clcBtn.onclick = calcWakeUpTimes; --- same as line 11

clcBtn.addEventListener("click", calcWakeUpTimes); // if someone clicks of calculate bitton call calcWakeUpTimes
refreshBtn.addEventListener("click", calcWakeUpTimes); //call function again when user clicks refresh button
returnBtn.addEventListener("click", () => { //anonymous function, function w/o name
  promptSection.classList.remove("hidden"); //show this text again
  imageContainer.classList.remove("hidden"); //show this text again
  resultSection.classList.add("hidden"); // hide results section
});

function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  wakeUpHoursDiv.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    const cycleDiv = document.createElement("div");
    cycleDiv.classList.add("cycle");
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.textContent = wakeUpTimeString;
    wakeUpHoursDiv.appendChild(cycleDiv);
  }

  promptSection.classList.add("hidden");
  imageContainer.classList.add("hidden"); //hide this class
  resultSection.classList.remove("hidden"); //no longer hidden class
}

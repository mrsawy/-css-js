const next = document.getElementById(`next`);
const perv = document.getElementById(`perv`);
const steps = [...document.getElementsByClassName(`step`)];
const progress = document.getElementById(`progress`);

let activeStep = 1;
next.addEventListener(`click`, () => {
  activeStep++;
  if (activeStep > 3) {
    activeStep = 3;
  }

  update();
});
perv.addEventListener(`click`, () => {
  activeStep--;
  if (activeStep < 1) {
    activeStep = 1;
  }

  update();
});
function update() {
    let progressRatio = ((activeStep-1)/(steps.length-1))/0.01 ;
    console.log(progressRatio);
    progress.style.width = `${progressRatio}%` ;
  steps.forEach((step, i) => {
    if (i < activeStep) {
      step.classList.add(`active`);
    }else{
        step.classList.remove(`active`);

    }
  });
}

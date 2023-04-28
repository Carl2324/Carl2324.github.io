const  previousBtn  =  document.getElementById('previousBtn');
const  nextBtn  =  document.getElementById('nextBtn');
const  finishBtn  =  document.getElementById('finishBtn');
const  content  =  document.getElementById('content');
const  bullets  =  [...document.querySelectorAll('.bullet')];
const  mainContents = [...document.querySelectorAll('.maincontent')]

const MAX_STEPS = 3;
let currentStep = 1;

mainContents[1].style.display = "none"
mainContents[2].style.display = "none"

nextBtn.addEventListener('click',  ()  =>  {
	bullets[currentStep  -  1].classList.add('completed');
	currentStep  +=  1;
	previousBtn.disabled  =  false;
	if  (currentStep  ===  MAX_STEPS)  {
		nextBtn.disabled  =  true;
		finishBtn.disabled  =  false;
	}
	//content.innerText  =  `Step Number ${currentStep}`;
    
    if (currentStep === 2) {
        mainContents[1].style.display = "block"
        mainContents[0].style.display = "none"
    } else if (currentStep === 3) {
        mainContents[2].style.display = "block"
        mainContents[1].style.display = "none"
    }
});


previousBtn.addEventListener('click',  ()  =>  {
	bullets[currentStep  -  2].classList.remove('completed');
	currentStep  -=  1;
	nextBtn.disabled  =  false;
	finishBtn.disabled  =  true;
	if  (currentStep  ===  1)  {
		previousBtn.disabled  =  true;
	}
	//content.innerText  =  `Step Number ${currentStep}`;
    
    if (currentStep === 1) {
        mainContents[1].style.display = "none"
        mainContents[0].style.display = "block"
    } else if (currentStep === 2) {
        mainContents[2].style.display = "none"
        mainContents[1].style.display = "block"
    } else if (currentStep === 3) {
        mainContents[2].style.display = "none"
        mainContents[1].style.display = "block"
    }
});

finishBtn.addEventListener('click',  ()  =>  {
	location.reload();
});
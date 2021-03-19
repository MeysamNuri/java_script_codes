let startBox = document.querySelector('.start-box')
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let successMessage = document.querySelector(".message .success")
let timerCircle = document.querySelector(".c100")
let timerNum = document.querySelector(".c100 > span")
let seconds, originSecend;
startCounter.addEventListener("click", startFunc)

function startFunc(e) {
    seconds = parseInt(inputCounter.value)
    console.log(seconds);
    if (isNaN(seconds)) return toggleError({ show: true, message: "لطفا عدد را به درستی وارد کنید" })

    toggleError({ show: false });
    originSecend = seconds
    let lastSecond = "p100"

    toggleStartBox({ show : false })
    toggleTimer({ show: true, seconds })
    toggleShowLoading({show:true})

    // start timer 
    let timerId = setInterval(startTimer, 1000);


    function startTimer() {
        if (lastSecond) timerCircle.classList.remove(lastSecond)
        seconds -= 1
        timerNum.textContent = seconds
        let percent = lastSecond = `p${Math.abs(Math.floor((((originSecend - seconds) / originSecend) * 100) - 100))}`
        timerCircle.classList.add(percent)
        if (seconds < 1) {
            clearInterval(timerId)

            toggleStartBox({show:true})
            inputCounter.value = ""
            toggleShowLoading({show:false})
            return
        }
    }
}
const toggleError = ({ show, message }) => {
    let errorElement = document.querySelector('#error-message');
    if (show) {
        errorElement.textContent = message
        errorElement.classList.add("active")
        successMessage.style.display = "none"
    }
    else {
        errorElement.textContent = ""

    }
}
const toggleShowLoading = ({show}) => {
    let loadingMessage = document.querySelector(".message .loading")

    if (show) {
        successMessage.style.display = "none"
        loadingMessage.style.display = "block"
    } else {
        loadingMessage.style.display = "none"
        successMessage.style.display = "block"
        timerCircle.style.display = "none"
    }

}
const toggleTimer = ({ show, seconds }) => {
    if (show) {
        timerNum.textContent = seconds
        timerCircle.style.display = "block"
    } else {
        timerCircle.style.display = "none"
    }
}
let toggleStartBox = ({ show }) => {
    if(show) {
        startBox.style.display = "block"
        inputCounter.value = ''
    } else {
        startBox.style.display = "none"
    
    }
}
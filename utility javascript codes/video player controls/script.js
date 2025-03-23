let playArea=document.querySelector(".myplayer")
let media=playArea.querySelector("video")
let controls=playArea.querySelector(".myplayer__controls")
let play=controls.querySelector(".play")
let rwd=controls.querySelector(".rewind")
let fwd=controls.querySelector(".forward")
let volumeIcon=controls.querySelector(".volume .icon")
let volueProgressBar=controls.querySelector(".volume .volume__progress")
let volumeProgressInput=volueProgressBar.querySelector("input")
let timeArea=controls.querySelector(".timer")
let currentTime=timeArea.querySelector(".currentTime")
let videoTimer=timeArea.querySelector(".videoTime")
let timeBar=controls.querySelector(".controls__progressbar-current")
let fullScreen=controls.querySelector(".fullscreen")
play.addEventListener("click",function(){
    videoTimer.textContent=getTime(media.duration)
 
    if(media.paused){
        toggleIcon()
      
        media.play()
       
    }else{
        toggleIcon()
        media.pause()
    }
})
media.volume=.5
rwd.addEventListener("click",function(){
    media.currentTime=media.currentTime -5
})
fwd.addEventListener("click",function(){
    media.currentTime=media.currentTime +5
})
media.addEventListener("timeupdate",function(){
 currentTime.textContent=getTime(media.currentTime)
 let barLength=(media.currentTime/media.duration) *100
 timeBar.style=`background: linear-gradient(90deg, rgba(230,126,34,1) ${barLength}%, #e1e1e1 0%);`
timeBar.value=barLength
})
timeBar.addEventListener("input",function(){
    media.currentTime=(this.value/100)*media.duration
})
volumeIcon.addEventListener("click",function(){
    volueProgressBar.classList.toggle("active")
})
volumeProgressInput.addEventListener("input",function(){
    media.volume=this.value/100
    this.style=` background : linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 0%);`
})
function toggleIcon(){
    let icon=play.querySelector("i")
    icon.classList.toggle("ion-md-play")
    icon.classList.toggle("ion-md-pause")
   
}
function getTime(time){
    let minuts=Math.floor(time/60)
    let seconds=Math.floor(time - (minuts * 60) )
    let minValue,secondsValue
    if(minuts<10){
     minValue='0'+minuts
    }
    else{
     minValue=minuts
    }
    if(seconds<10){
     secondsValue='0'+seconds
    }
    else{
     secondsValue=seconds
    }
   return minValue +":" + secondsValue
}
fullScreen.addEventListener("click",function(){
    if (!document.fullscreenElement) {
        if(playArea.requestFullscreen) {
            playArea.requestFullscreen();
        } else if(playArea.mozFullScreenElement) {
            playArea.mozFullScreenElement()
        } else if(playArea.msFullscreenElement) {
            playArea.msFullscreenElement()
        } else if(playArea.webkitFullscreenElement) {
            playArea.webkitFullscreenElement()
        }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      } else if(document.mozCancelFullscreen) {
        document.mozCancelFullscreen(); 
      } else if(document.msCancelFullscreen) {
        document.msCancelFullscreen(); 
      } else if(document.webkitCancelFullscreen) {
        document.webkitCancelFullscreen(); 
      }
    }
})
let note=document.querySelector(".nowplaying")
let keys=document.querySelectorAll(".key")
const hints=document.querySelectorAll(".hints")
console.log(keys);
window.addEventListener("keydown",function(e){
    console.log(e.keyCode);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio);
    if(! key) return

    const keyNote=key.getAttribute("data-note")
    key.classList.add("playing")
    console.log(keyNote);
    note.textContent=keyNote
    audio.currentTime=0
    audio.play()
})
function removestyle(){
    this.classList.remove("playing")
}
keys.forEach(key=>key.addEventListener("transitionend", removestyle))
hints.forEach((el,index)=>(
    // el.style=`transition-delay:${index *50}ms`
    el.setAttribute("style",`transition-delay:${index *50}ms`)
))